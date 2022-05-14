<script>
	/* import Russell Goldenberg's Scrolly component 
	(from https://t.co/l8fOJaiwkX) */
	import Scroll from "./Scrolly.svelte";
	import { tweened } from "svelte/motion";

	/* import d3
	make sure to run "npm install d3" to install the d3 dependency */
	import * as d3 from "d3";
	import { onMount } from "svelte";
	import * as topojson from "topojson";

	/* import data */
	import topo from "./assets/counties-10m.json"; // topojson data
	import data from "./assets/power-plants-eia.json"; // power plant locations data
	import { text } from "svelte/internal";

	/* set up */
	let w = 840;
	let h = 640;
	let m = { top: 20, right: 20, bottom: 20, left: 20 };
	const colorA = "#495057";
	const colorB = "#38a3a5";
	const colorC = "#e55c90";

	/* if you need access to DOM elements inside the component, 
	they will be first available inside onMount: */
	onMount(async () => {
		let svg = d3.select("svg").attr("width", w).attr("height", h);
		let points = svg
			.selectAll(".point")
			.data(filtered)
			.join("circle")
			.attr("cx", (d) => projection([+d.LNG, +d.LAT])[0])
			.attr("cy", (d) => projection([+d.LNG, +d.LAT])[1])
			.attr("r", 4)
			.attr("class", "point")
			.style("fill", colorA);
	});

	/* define a MAP PROJECTION and a PATH GENERATOR */
	const projection = d3.geoAlbersUsa().translate([w / 2, h / 2]);
	const path = d3.geoPath().projection(projection);

	/* prep for base map */
	const states = topojson.feature(topo, topo.objects.states);
	const geo = states.features;

	/* filtering data to only include coal power plants and ignore null values */
	let filtered = data.filter((d) => {
		return projection([+d.LNG, +d.LAT]) != null && d.TYPE === "Coal";
	});

	/* handling the scrolly */
	let currentStep;
	const steps = [
		"<p>All coal plants in the U.S.</p>",
		"<p>Coal plants that have been retired, as of 2022.</p>",
		"<p>Coal plants that will be retired by 2050.</p>",
	];

	const stepZero = function () {
		d3.select("svg").selectAll(".point").style("fill", colorA);
	};

	const stepOne = function () {
<<<<<<< HEAD
<<<<<<< HEAD
		pointColor = "pink";
	};

	const stepTwo = function () {
		//console.log(currentStep);
		pointColor = "purple";
=======
		d3.select("svg")
			.selectAll(".point")
			.style("fill", (d) => {
				if (d.RETIREMENT_YEAR <= "2021" && d.RETIREMENT_YEAR != "") {
					return colorB;
				} else {
					return colorA;
				}
			});
	};

	const stepTwo = function () {
=======
		d3.select("svg")
			.selectAll(".point")
			.style("fill", (d) => {
				if (d.RETIREMENT_YEAR <= "2021" && d.RETIREMENT_YEAR != "") {
					return colorB;
				} else {
					return colorA;
				}
			});
	};

	const stepTwo = function () {
>>>>>>> scrolly
		d3.select("svg")
			.selectAll(".point")
			.style("fill", (d) => {
				if (d.RETIREMENT_YEAR <= "2021" && d.RETIREMENT_YEAR != "") {
					return colorB;
				} else if (d.RETIREMENT_YEAR >= "2022") {
					return colorC;
				} else {
					return colorA;
				}
			});
<<<<<<< HEAD
>>>>>>> scrolly
=======
>>>>>>> scrolly
	};

	/* run code reactively
	the "if...else" block will run every time the variable "currentStep" changes
	and evaluate differently based on the value of "currentStep" */
	$: if (currentStep == 0) {
		stepZero();
	} else if (currentStep == 1) {
		stepOne();
	} else if (currentStep == 2) {
		stepTwo();
	}
<<<<<<< HEAD
<<<<<<< HEAD

	/* if you need access to DOM elements inside the component, 
	they will be first available inside onMount: */
	onMount(async () => {
		const svg = d3.select("svg").attr("width", w).attr("height", h);
	});
=======
>>>>>>> scrolly
=======
>>>>>>> scrolly
</script>

<svelte:head>
	<!-- importing Google Fonts -->
	<!-- CSS rules to specify the families:
		font-family: 'IBM Plex Mono', monospace;
		font-family: 'Space Grotesk', sans-serif;
		font-family: 'Spectral', serif;
		-->

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@400;500;600;700&family=Spectral:ital,wght@0,400;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<section>
	<!-- a sticky base map -->
	<div class="container">
		<svg>
			{#each geo as g}
				<path d={path(g)} class="states" />
			{/each}

<<<<<<< HEAD
<<<<<<< HEAD
			{#each filtered as d}
=======
=======
>>>>>>> scrolly
			<!--
			{#each filtered as d, i}
>>>>>>> scrolly
				<circle
					cx={projection([+d.LNG, +d.LAT])[0]}
					cy={projection([+d.LNG, +d.LAT])[1]}
					r={4}
					class="point"
					fill={tweenedColor[i]}
				/>
			{/each}
			-->
		</svg>
	</div>

	<!-- a scrolly container -->
	<Scroll bind:value={currentStep}>
		{#each steps as text, i}
			<!-- set an "active" class to the step content if the "currentStep" is 
      equal to the step index -->
			<div class="step" class:active={currentStep === i}>
				<div class="step-content">
					{@html text}
				</div>
			</div>
		{/each}
	</Scroll>
</section>

<style>
	/* use the :global() modifier to apply styles globally */
	.container {
		width: 840px;
		height: 640px;
		top: 5%;
		margin: auto;
		position: sticky;
		padding: 20px 20px 20px 20px;
	}

	:global(.states) {
		fill: #f8f9fa;
		stroke: #dee2e6;
		stroke-width: 1px;
	}

	:global(.point) {
		opacity: 0.5;
	}

	:global(.point:hover) {
		fill: #ff4d6d;
		opacity: 1;
	}

	:global(.tooltip) {
		position: absolute;
		padding: 10px;
		border-radius: 3px;
		width: 200px;
		background-color: #f8f9fa;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
		pointer-events: none;
		stroke: black;
	}

	:global(.tooltip p) {
		font-family: "IBM Plex Mono", monospace;
		margin: 0;
		font-size: 12px;
	}

	:global(.tooltip.hidden) {
		display: none;
	}

	/* STEP STYLING */

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
		font-family: "IBM Plex Mono", monospace;
		font-size: 12px;
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
