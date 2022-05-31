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
	import allData from "./assets/power-plants-eia.json"; // power plant locations data
	const data = allData.filter((d) => d.TYPE === "Coal"); // just the coal plant data

	/* SET-UP */

	/* initializing some variables */
	let svg;
	let currentStep;
	let timer;
	let label;
	let legend;
	let autoplay = true;
	let step;

	/* BASE MAP */

	const states = topojson.feature(topo, topo.objects.states);
	const geo = states.features;

	const projection = d3.geoAlbersUsa(); //.translate([w / 2, h / 2]);
	const path = d3.geoPath().projection(
		projection.fitExtent(
			[
				[m.top, m.left],
				[w - m.bottom, h - m.right],
			],
			states
		)
	);

	/* ACCESSING DOM ELEMENTS */

	/* if you need access to DOM elements inside the component, 
	they will be first available inside onMount: */
	onMount(async () => {
		svg = d3.select("svg");
		legend = d3.select("#legend");
		label = d3.select("#label");
		label.html(`Coal Plants in ${pointer}`).attr("id", "label");
		step = d3.selectAll(".step-content");
	});

	/* TIMELAPSE SET-UP */

	const start = 1950;
	const end = 2011;
	let pointer = start; // start the pointer at the "start" year
	let startData = data.filter((d) => d.OP_YEAR <= start - 1);

	/* a function to scale the size of point to the nameplate capacity in MW;
  this works in a similar way to the projection function */
	const min = 5;
	const max = 13;
	let size = d3
		.scaleLinear()
		.domain(d3.extent(data, (d) => d.CAPACITY_MW))
		.range([min, max]);

	/* HANDLING THE SCROLLY & TIMELAPSE POINTS */

	/* an array with the text content for each step */
	const steps = [step0, step1, step2, step3];

	/* this function updates the timelapse with data from each year */
	const update = (data, currentYear) => {
		let filtered = data.filter(
			(d) => d.OP_YEAR <= currentYear - 1
			//d.RETIREMENT_YEAR > currentYear - 1 // TO DO: double check retirement dates
		);
		svg
			.selectAll(".point")
			.data(filtered)
			.join((enter) =>
				enter.append("circle").attr("class", "point").attr("r", 5)
			)
			.attr("cx", (d) => projection([+d.LNG, +d.LAT])[0])
			.attr("cy", (d) => projection([+d.LNG, +d.LAT])[1]);
	};

	/* this function runs the timelapse timer and resets it once the 
  animation reaches the last year */
	const handleStep0 = () => {
		step.style("visibility", "visible").style("opacity", 100);
		if (autoplay === true) {
			timer = setInterval(() => {
				update(data, pointer);
				label
					.html(`Coal Plants in ${pointer}`)
					.attr("id", "label")
					.style("color", "white")
					.style("background-color", "#e76f51")
					.transition()
					.duration(300)
					.style("opacity", 1); // updating the label with the year
				if (pointer < end) {
					pointer++;
				} else {
					// if the timelapse reaches the last year
					clearInterval(timer);
					// pointer = start; // reset pointer
				}
			}, 100);
		} else {
			svg
				.selectAll(".point")
				.data(data)
				.join("circle")
				.filter((d) => d.OP_YEAR <= end - 1)
				.attr("class", "point")
				.attr("cx", (d) => projection([+d.LNG, +d.LAT])[0])
				.attr("cy", (d) => projection([+d.LNG, +d.LAT])[1])
				.attr("r", (d) => 5)
				.style("fill", "#e76f51")
				.style("fill-opacity", 0.65)
				.style("stroke", "#e76f51")
				.style("stroke-width", "1px")
				.style("stroke-opacity", 1);

			legend.transition().duration(200).style("visibility", "hidden");
		}
	};

	const handleStep1 = () => {
		//console.log("Step 1");
		clearInterval(timer); // jumping the timelapse ahead to the end of the animation
		autoplay = false; // ensuring that timelapse doesn't continue playing once a user scrolls back

		label
			.html(`Coal Plants in ${end}`)
			.attr("id", "label")
			.style("color", "white")
			.style("background-color", "#e76f51")
			.transition()
			.duration(300)
			.style("opacity", 1); // updating the label with the year

		legend.transition().duration(200).style("visibility", "visible");

		//let oldPlants = data.filter((d) => d.OP_YEAR <= end - 1);
		svg
			.selectAll(".point")
			.data(data)
			.join("circle")
			.filter((d) => d.OP_YEAR <= end - 1)
			.attr("class", "point")
			.attr("cx", (d) => projection([+d.LNG, +d.LAT])[0])
			.attr("cy", (d) => projection([+d.LNG, +d.LAT])[1])
			.attr("r", (d) => size(d.CAPACITY_MW))
			.style("fill", "#e76f51")
			.style("fill-opacity", 0.65)
			.style("stroke", "#e76f51")
			.style("stroke-width", "1px")
			.style("stroke-opacity", 1);
	};

	const handleStep2 = () => {
		label
			.html(`Retired Coal Plants`)
			.attr("id", "label")
			.style("color", "white")
			.style("background-color", "#e3c500")
			.transition()
			.duration(300)
			.style("opacity", 1);

		legend.style("visibility", "visible");

		svg
			.selectAll(".point")
			.data(data)
			.join("circle")
			.filter((d) => d.OP_YEAR <= end - 1)
			.attr("class", "point")
			.attr("cx", (d) => projection([+d.LNG, +d.LAT])[0])
			.attr("cy", (d) => projection([+d.LNG, +d.LAT])[1])
			.attr("r", (d) => size(d.CAPACITY_MW));

		svg
			.selectAll(".point")
			.filter(
				(d) =>
					d.OP_YEAR <= end - 1 &&
					d.RETIREMENT_YEAR <= 2021 &&
					d.RETIREMENT_YEAR != ""
			)
			.attr("cx", (d) => projection([+d.LNG, +d.LAT])[0])
			.attr("cy", (d) => projection([+d.LNG, +d.LAT])[1])
			.attr("r", (d) => size(d.CAPACITY_MW))
			.transition()
			.duration(300)
			.style("fill", "#ffe436")
			.style("fill-opacity", 1)
			.style("stroke", "#e3c500")
			.style("stroke-width", "1px")
			.style("stroke-opacity", 1);
	};

	const handleStep3 = () => {
		label
			.html(`Retired Coal Plants`)
			.attr("id", "label")
			.style("color", "white")
			.style("background-color", "#e3c500")
			.transition()
			.duration(200)
			.style("opacity", 0);

		legend.style("visibility", "visible");

		svg
			.selectAll(".point")
			.filter(
				(d) =>
					d.OP_YEAR <= end - 1 &&
					d.RETIREMENT_YEAR <= 2050 &&
					d.RETIREMENT_YEAR != ""
			)
			.attr("cx", (d) => projection([+d.LNG, +d.LAT])[0])
			.attr("cy", (d) => projection([+d.LNG, +d.LAT])[1])
			.transition()
			.duration(1500)
			.attr("r", 0);
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
				<circle
					cx={projection([+d.LNG, +d.LAT])[0]}
					cy={projection([+d.LNG, +d.LAT])[1]}
					r="5"
					class="point"
				/>
			{/each}
		</svg>

		<div id="label" />
		<svg width="200px" id="legend">
			<!-- smallest MW -->
			<text x="25" y="28" class="legendLabel">0.5 MW</text>
			<circle cx={85} cy={25} r={min} class="circle" />
			<!-- largest MW -->
			<circle cx={110} cy={25} r={max} class="circle" />
			<text x="145" y="28" class="legendLabel">1 GW</text>
		</svg>
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
		text-align: center;
		width: 200px;
		top: 100px;
		left: 60vw;
		color: white;
		font-family: "IBM Plex Mono", monospace;
		background-color: #e76f51;
		font-size: 1rem;
		font-weight: 700;
		padding: 3px 5px 3px 5px;
	}

	#legend {
		position: absolute;
		text-align: center;
		margin: auto;
		width: 200px;
		top: 125px;
		left: 60vw;
		visibility: hidden;
	}

	.legendLabel {
		fill: #e76f51;
		font-family: "IBM Plex Mono", monospace;
		font-size: 0.75rem;
	}

	.circle {
		position: absolute;
		fill: #e76f51;
		fill-opacity: 0.65;
		stroke: #e76f51;
		stroke-width: 1px;
		stroke-opacity: 1;
	}

	/* MAP STYLING */

	.states {
		fill: #fff4ed;
		stroke: #fbd2b6;
		stroke-width: 1px;
	}

	:global(.point) {
		position: absolute;
		fill: #e76f51;
		fill-opacity: 0.65;
		stroke: #e76f51;
		stroke-width: 1px;
		stroke-opacity: 1;
	}

	/* STEP CONTENT STYLING */

	/* the container for each step */
	.step {
		height: 100vh;
		display: flex;
		place-items: center;
		justify-content: center;
	}

	/* the content for each step */
	.step-content {
		background-color: #f8f9fa;
		color: #ccc;
		font-family: "HK Grotesk";
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
