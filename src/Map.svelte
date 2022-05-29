<script>
	/* EXPORTS */
	export let w = 1000;
	export let h = 800;
	export let m = { top: 5, right: 5, bottom: 5, left: 5 };
	export let step0 = "";
	export let step1 = "";
	export let step2 = "";
	export let step3 = "";

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
	let label;
	let autoplay = true;

	/* ACCESSING DOM ELEMENTS */

	/* if you need access to DOM elements inside the component, 
	they will be first available inside onMount: */
	onMount(async () => {
		svg = d3.select("svg");
		label = d3.select("#label");
	});

	/* BASE MAP */

	const states = topojson.feature(topo, topo.objects.states);
	const geo = states.features;

	const projection = d3.geoAlbersUsa().fitExtent(
		[
			[m.top, m.left],
			[w - m.bottom, h - m.right],
		],
		states
	); //.translate([w / 2, h / 2]);
	const path = d3.geoPath().projection(projection);

	/* TIMELAPSE SET-UP */

	const start = 1950;
	const end = 2011;
	let pointer = start; // start the pointer at the "start" year
	let startData = data.filter(
		(d) => d.TYPE === "Coal" && d.OP_YEAR <= start - 1
	);

	/* this function updates the timelapse with data from each year */
	const update = (data, currentYear) => {
		let filtered = data.filter(
			// TO DO: change opacity of retired plants
			(d) => d.TYPE === "Coal" && d.OP_YEAR <= currentYear - 1
			//d.RETIREMENT_YEAR > currentYear - 1 // TO DO: double check retirement dates
		);
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
	const steps = [step0, step1, step2, step3];

	/* this function runs the timelapse timer and resets it once the 
  animation reaches the last year */
	const handleStep0 = () => {
		if (autoplay === true) {
			timer = setInterval(() => {
				update(data, pointer);
				if (pointer < end) {
					pointer++;
				} else {
					// if the timelapse reaches the last year
					clearInterval(timer);
					// pointer = start; // reset pointer
				}
			}, 100);
		}
	};

	const handleStep1 = () => {
		//console.log("Step 1");
		clearInterval(timer);
		autoplay = false;
		label.html(`Coal Plants in ${end}`).attr("id", "label"); // updating the label with the year
		svg.selectAll(".pointR").style("visibility", "hidden");

		let oldPlants = data.filter(
			(d) => d.TYPE === "Coal" && d.OP_YEAR <= end - 1
		);
		svg
			.selectAll(".point")
			.data(oldPlants)
			.join("rect")
			.attr("class", "point")
			.attr("x", (d) => projection([+d.LNG, +d.LAT])[0])
			.attr("y", (d) => projection([+d.LNG, +d.LAT])[1])
			.attr("width", "7px")
			.attr("height", "7px");
	};

	const handleStep2 = () => {
		console.log("Step 2");

		label.html(`Retired Plants`).attr("id", "label"); // updating the label with the year

		let oldPlants = data.filter(
			(d) => d.TYPE === "Coal" && d.OP_YEAR <= end - 1
		);

		svg
			.selectAll(".point")
			.data(oldPlants)
			.join("rect")
			.attr("class", "point")
			.attr("x", (d) => projection([+d.LNG, +d.LAT])[0])
			.attr("y", (d) => projection([+d.LNG, +d.LAT])[1])
			.attr("width", "7px")
			.attr("height", "7px");

		let retiredPlants = data.filter(
			(d) =>
				d.TYPE === "Coal" &&
				d.RETIREMENT_YEAR >= end - 1 &&
				d.RETIREMENT_YEAR <= 2021
		);

		svg
			.selectAll(".pointR")
			.data(retiredPlants)
			.join("rect")
			.attr("class", ".pointR")
			.attr("x", (d) => projection([+d.LNG, +d.LAT])[0])
			.attr("y", (d) => projection([+d.LNG, +d.LAT])[1])
			.attr("width", "7px")
			.attr("height", "7px")
			.style("fill", "#ffb703");

		// let newPlants = data.filter((d) => d.TYPE === "Coal" && d.OP_YEAR >= end); // TO DO
	};

	const handleStep3 = () => {
		svg.selectAll(".point").style("opacity", "0.25");
		svg.selectAll(".pointR").style("opacity", "0.25");
	};

	/* run code reactively
	the "if...else" block will run every time the variable "currentStep" changes
	and evaluate differently based on the value of "currentStep" */
	$: if (currentStep == 0) {
		handleStep0();
	} else if (currentStep == 1) {
		handleStep1();
	} else if (currentStep == 2) {
		handleStep2();
	} else if (currentStep == 3) {
		handleStep3();
	}
</script>

<section>
	<div id="container">
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
		max-width: 100%;
		margin: 0;
		padding: 0;
	}

	svg {
		overflow: hidden;
	}

	#container {
		text-align: center;
		justify-content: center;
		max-width: 100vw;
		max-height: 100vh;
		top: 10vh;
		margin: auto;
		padding: 0;
		position: sticky;
		overflow: hidden;
	}

	#label {
		position: absolute;
		width: 200 px;
		top: 10vh;
		left: 55vw;
		color: #e76f51;
		font-family: "Fira Code", monospace;
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
	}

	:global(.pointR) {
		fill: #ffb703;
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
		font-family: "Chivo", sans-serif;
		font-size: 1rem;
		border-radius: 5px;
		width: 30vw;
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
