<script>
	/* EXPORTS */
	export let w = 840;
	export let h = 640;

	/* IMPORTS */

	/* importing sub-components */
	import Scrolly from "./Scrolly.svelte"; // Russell Goldenberg's Scrolly component (from https://t.co/l8fOJaiwkX)

	/* importing other requirements */
	import { onMount } from "svelte";
	import * as d3 from "d3";
	import * as topojson from "topojson";

	/* importing data */
	import topo from "./assets/counties-10m.json"; // topojson data
	import data from "./assets/power-plants-eia.json"; // power plant locations data

	/* SET-UP */

	/* initializing some variables */
	let svg;
	let currentStep;
	let timer;
	let inverted;
	let label;

	/* ACCESSING DOM ELEMENTS */

	/* if you need access to DOM elements inside the component, 
	they will be first available inside onMount: */
	onMount(async () => {
		svg = d3.select("svg");
		label = d3.select("#label");
	});

	/* BASE MAP */

	const projection = d3.geoAlbersUsa().translate([w / 2, h / 2]);
	const path = d3.geoPath().projection(projection);

	const states = topojson.feature(topo, topo.objects.states);
	const geo = states.features;

	/* TIMELAPSE SET-UP */

	const start = 1950;
	const end = 2010;
	let pointer = start; // start the pointer at the "start" year
	let startData = data.filter((d) => d.TYPE === "Coal" && d.OP_YEAR <= start);

	/* this function updates the timelapse with data from each year */
	const update = (data, currentYear) => {
		let filtered = data.filter(
			(d) =>
				d.TYPE === "Coal" &&
				d.OP_YEAR <= currentYear &&
				d.RETIREMENT_YEAR > currentYear // TO DO: double check retirement dates
		);
		console.log("filtered data", filtered);
		svg
			.selectAll(".point")
			.data(filtered)
			.join("rect")
			.attr("class", "point")
			.attr("x", (d) => projection([+d.LNG, +d.LAT])[0])
			.attr("y", (d) => projection([+d.LNG, +d.LAT])[1])
			.attr("width", "7px")
			.attr("height", "7px");

		label.html(`Coal Plants in ${currentYear}`).attr("id", "label"); // updating the label with the year
	};

	/* HANDLING THE SCROLLY & TIMELAPSE POINTS */

	/* an array with the text content for each step */
	const steps = [
		"<p>All coal plants in the U.S.</p>",
		"<p>Coal plants that have been retired, as of 2022.</p>",
		"<p>Coal plants that will be retired by 2050.</p>",
	];

	/* this function runs the timelapse timer and resets it once the 
  animation reaches the last year */
	const step0 = () => {
		console.log("Step 0");
		timer = setInterval(() => {
			update(data, pointer);
			if (pointer < end) {
				pointer++;
			} else {
				// if the timelapse reaches the last year
				clearInterval(timer);
				pointer = start; // reset pointer
			}
		}, 100);
	};

	const step1 = () => {
		console.log("Step 1");
	};

	const step2 = () => {
		console.log("Step 2");
	};

	/* run code reactively
	the "if...else" block will run every time the variable "currentStep" changes
	and evaluate differently based on the value of "currentStep" */
	$: if (currentStep == 0) {
		step0();
	} else if (currentStep == 1) {
		step1();
	} else if (currentStep == 2) {
		step2();
	}
</script>

<section>
	<!-- a sticky base map -->
	<div class="container">
		<svg width={w} height={h}>
			{#each geo as g}
				<path d={path(g)} class="states" />
			{/each}

			{#each startData as d}
				<rect
					x={projection([+d.LNG, +d.LAT])[0]}
					y={projection([+d.LNG, +d.LAT])[1]}
					width="7px"
					height="7px"
					class="point"
				/>
			{/each}
		</svg>
		<div id="label">Coal Plants in 1950</div>
	</div>

	<!-- a scrolly container -->
	<Scrolly bind:value={currentStep}>
		{#each steps as text, i}
			<!-- set an "active" class to the step content if the "currentStep" is 
      equal to the step index -->
			<div class="step" class:active={currentStep === i}>
				<div class="step-content">
					{@html text}
				</div>
			</div>
		{/each}
	</Scrolly>
</section>

<style>
	section {
		text-align: center;
		justify-content: center;
		margin: auto;
	}

	.container {
		top: 5%;
		margin: auto;
		position: sticky;
		padding: 20px 20px 20px 20px;
	}

	#label {
		position: absolute;
		width: 200 px;
		top: 10vh;
		left: 55vw;
		color: #e76f51;
		font-family: "Spline Sans Mono", monospace;
		font-size: 1rem;
		font-weight: 700;
	}

	/* MAP STYLING */

	.states {
		fill: #f8f9fa;
		stroke: #dee2e6;
		stroke-width: 1px;
	}

	:global(.point) {
		fill: #e76f51;
		opacity: 0.65;
	}

	/* STEP CONTENT STYLING */

	/* the container for each step */
	.step {
		height: 80vh;
		display: flex;
		place-items: center;
		justify-content: center;
	}

	/* the content for each step */
	.step-content {
		background-color: #f8f9fa;
		color: #ccc;
		font-family: "Spline Sans Mono", monospace;
		font-size: 0.85rem;
		font-weight: 400;
		border-radius: 5px;
		padding: 0.5rem 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		transition: background 500ms ease;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
		z-index: 10;
	}

	/* this makes the element stand out if it is active */
	.step.active .step-content {
		background: white;
		color: black;
	}
</style>
