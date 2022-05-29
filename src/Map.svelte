<script>
	/* EXPORTING PROPS */
	export let w = 1000; // setting default values
	export let h = 800;
	export let m = { top: 5, right: 5, bottom: 5, left: 5 };

	/* IMPORTS */

	/* importing sub-components */
	import Scrolly from "./Scrolly.svelte"; // Russell Goldenberg's Scrolly component (from https://t.co/l8fOJaiwkX)

	/* importing other requirements */
	import { onMount } from "svelte";
	import * as d3 from "d3";
	import * as topojson from "topojson";

	/* importing data */
	import topo from "./data/counties-10m.json"; // topojson data
	import data from "./data/power-plants-eia.json"; // power plant locations data

	/* initializing some variables */
	let svg;
	let currentStep;
	let timer;
	let label;

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
		/*
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
    */
	};

	const step1 = () => {
		console.log("Step 1");
	};

	const step2 = () => {
		console.log("Step 2");
	};

	/* run code reactively:
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
	<div class="container" />
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
		margin: 0;
		padding: 0;
	}

	.container {
		text-align: center;
		width: 100vw;
		height: 100vh;
		margin: 0;
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
