<script>
	// importing Russel Goldenberg's Scrolly component
	import Scroll from "./Scrolly.svelte";

	let data = [
		{ foo: 4, bar: 1 },
		{ foo: 6, bar: 7 },
		{ foo: 9, bar: 5 },
		{ foo: 2, bar: 4 },
		{ foo: 8, bar: 2 },
		{ foo: 9, bar: 9 },
		{ foo: 5, bar: 3 },
		{ foo: 3, bar: 8 },
		{ foo: 1, bar: 6 },
	];
	/* using Svelte's "tweened" values: https://svelte.dev/tutorial/tweened 
  smoothly transitions (with an animation) between two values 
  1. Active step should update based on the viewport 
  2. Tweened values update based on the active step 
  3. Animate points to their new "x" */
	import { tweened } from "svelte/motion";

	/* a tweened array, where each value in that array is animatable;
	initiate a tweened array with starting "x" positions */
	const tweenedX = tweened(data.map((d) => d.foo));

	const setFoo = function () {
		tweenedX.set(data.map((d) => d.foo));
	};
	const setBar = function () {
		tweenedX.set(data.map((d) => d.bar));
	};

	/* Use D3 scales to map raw values to computer values */
	import { scaleLinear } from "d3-scale";

	let width = 400;
	let height = 400;

	let xScale = scaleLinear().domain([0, 10]).range([0, width]);
	let yScale = scaleLinear().domain([0, 10]).range([height, 0]);

	let currentStep;

	/* an array that contains the paragraphs of text that we include 
  in each step, making it easier to integrate prose */
	const steps = ["<p>Step 0</p>", "<p>Step 1</p>", "<p>Step 2</p>"];

	/* run code reactively
	the "if...else" block will run every time the variable "currentStep" changes
	and evaluate differently based on the value of "currentStep" */
	$: if (currentStep == 0) {
		setFoo();
	} else if (currentStep == 1) {
		setBar();
	} else if (currentStep == 2) {
		setFoo();
	}
</script>

<section>
	<!-- The chart in the background, which is sticky thanks to CSS below -->
	<div class="chart">
		<svg {width} {height}>
			{#each data as d, index}
				<circle
					cx={xScale($tweenedX[index])}
					cy={yScale(d.bar)}
					r={15}
					fill="steelblue"
					stroke="#000000"
				/>
			{/each}
		</svg>
	</div>

	<!-- A SCROLLY CONTAINER -->
	<!-- renders step text and applies a class of "active" to the current step -->
	<!-- "currentStep" will be bound to the current step index;
  as the user scrolls, the first step comes into focus, and "currentStep"
  will be set to "0" -->
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
	/* THE FIXED CHART */
	.chart {
		background: whitesmoke;
		width: 400px;
		height: 400px;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
		position: sticky;
		top: 10%;
		margin: auto;
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
		background: whitesmoke;
		color: #ccc;
		border-radius: 5px;
		padding: 0.5rem 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		transition: background 500ms ease;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
		z-index: 10;
	}

	/* this makes the element stand out if it is active */
	.step.active .step-content {
		background: white;
		color: black;
	}
</style>
