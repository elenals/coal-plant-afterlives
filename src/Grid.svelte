<script>
	export let step0 = "";
	export let step1 = "";
	export let step2 = "";
	export let step3 = "";

	import Scrolly from "./Scrolly.svelte"; // Russell Goldenberg's Scrolly component (from https://t.co/l8fOJaiwkX)

	/* importing other requirements */
	import { onMount } from "svelte";
	import * as d3 from "d3";

	let currentStep;
	let highlighted;
	let items;

	/* an array with the text content for each step */
	const steps = [step0, step1, step2, step3];

	onMount(async () => {
		items = d3.selectAll(".item");
		highlighted = d3.selectAll(".highlight");
	});

	const handleStep0 = () => {
		items.transition().duration(400).style("filter", "brightness(60%)");
	};

	const handleStep1 = () => {
		highlighted.transition().duration(400).style("filter", "brightness(100%)");
	};

	const handleStep3 = () => {};

	/* run code reactively
	the "if...else" block will run every time the variable "currentStep" changes
	and evaluate differently based on the value of "currentStep" */
	$: if (currentStep == 0) {
		handleStep0();
	} else if (currentStep == 1) {
		handleStep1();
	} else if (currentStep == 2) {
		console.log("Step 2");
	} else if (currentStep == 3) {
		handleStep3();
	}
</script>

<section>
	<div class="wrapper">
		<div class="container">
			<img class="item highlight" src="images/beloit-2013.jpg" alt="" />
			<img class="item" src="images/beloit-2013.jpg" alt="" />
			<img class="item" src="images/beloit-2013.jpg" alt="" />
			<img class="item highlight" src="images/beloit-2013.jpg" alt="" />
			<img class="item highlight" src="images/beloit-2013.jpg" alt="" />
			<img class="item" src="images/beloit-2013.jpg" alt="" />
			<img class="item" src="images/beloit-2013.jpg" alt="" />
			<img class="item highlight" src="images/beloit-2013.jpg" alt="" />
			<img class="item" src="images/beloit-2013.jpg" alt="" />
			<img class="item highlight" src="images/beloit-2013.jpg" alt="" />
			<img class="item" src="images/beloit-2013.jpg" alt="" />
			<img class="item" src="images/beloit-2013.jpg" alt="" />
			<img class="item highlight" src="images/beloit-2013.jpg" alt="" />
			<img class="item" src="images/beloit-2013.jpg" alt="" />
			<img class="item highlight" src="images/beloit-2013.jpg" alt="" />
			<img class="item" src="images/beloit-2013.jpg" alt="" />
		</div>
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
		margin: 0;
		padding: 0;
	}

	.wrapper {
		text-align: center;
		justify-content: center;
		max-width: 100vw;
		max-height: 100vh;
		margin: auto;
		top: 0; /* keep this */
		padding: 0;
		position: sticky;
		overflow: hidden;
	}

	.container {
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.item {
		flex: 0 25%;
		margin: auto;
		min-width: 0;
		filter: brightness(60%) contrast(110%);
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
		z-index: 1;
	}

	/* this makes the element stand out if it is active */
	.step.active .step-content {
		background: white;
		color: black;
	}
</style>
