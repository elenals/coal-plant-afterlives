<script>
	export let step0 = "";
	export let step1 = "";
	export let step2 = "";
	export let step3 = "";

	import Scrolly from "./Scrolly.svelte"; // Russell Goldenberg's Scrolly component (from https://t.co/l8fOJaiwkX)
	import Hed from "./Hed.svelte";

	/* importing other requirements */
	import { onMount } from "svelte";
	import * as d3 from "d3";

	let currentStep;
	let highlighted;
	let items;
	let step;
	let hed;

	/* an array with the text content for each step */
	const steps = [step0, step1, step2, step3, ""];

	onMount(async () => {
		items = d3.selectAll(".item");
		highlighted = d3.selectAll(".highlight");
		step = d3.selectAll(".step-content");
		hed = d3.select("#hed");
	});

	const handleStep0 = () => {
		step.style("visibility", "visible");
		items
			.transition()
			.duration(400)
			.style("filter", "brightness(40%) contrast(110%)");
	};

	const handleStep1 = () => {
		step.style("visibility", "visible");
		items.transition().duration(400).style("filter", "brightness(100%)");
	};

	const handleStep2 = () => {
		step.style("visibility", "visible");
		items
			.transition()
			.duration(400)
			.style("filter", "brightness(40%) contrast(110%)");
		highlighted.transition().duration(400).style("filter", "brightness(100%)");
	};

	const handleStep3 = () => {
		step
			.transition()
			.style("visibility", "visible")
			.duration(600)
			.style("opacity", 100);
		hed.style("visibility", "hidden");
		items
			.transition()
			.duration(600)
			.style("opacity", 100)
			.style("filter", "brightness(40%) contrast(110%)");
	};

	const handleStep4 = () => {
		step
			.transition()
			.duration(600)
			.style("opacity", 0)
			.style("visibility", "hidden");
		items.transition().duration(1000).style("opacity", 0);
		hed
			.style("visibility", "visible")
			.style("opacity", 0)
			.transition()
			.duration(800)
			.style("opacity", 100);
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
	} else if (currentStep == 4) {
		handleStep4();
	}
</script>

<section>
	<div class="wrapper">
		<div class="container">
			<img class="item " src="images/four-corners-2022.jpg" alt="" />
			<img class="item" src="images/harrington-2022.jpg" alt="" />
			<img class="item highlight" src="images/beloit-2022.jpg" alt="" />
			<img class="item highlight" src="images/brayton-2022.jpg" alt="" />
			<img class="item highlight" src="images/coal-creek-2022.jpg" alt="" />
			<img class="item" src="images/indian-river-2022.jpg" alt="" />
			<img class="item" src="images/naughton-2022.jpg" alt="" />
			<img class="item highlight" src="images/hayden-2022.jpg" alt="" />
			<img class="item" src="images/rio-bravo-poso-2016.jpg" alt="" />
			<img class="item highlight" src="images/sherco-2022.jpg" alt="" />
			<img
				class="item"
				src="images/san-juan-generating-station-2022.jpg"
				alt=""
			/>
			<img class="item" src="images/springerville-2022.jpg" alt="" />
			<img class="item highlight" src="images/wood-river-2022.jpg" alt="" />
			<img class="item" src="images/waukegan-2022.jpg" alt="" />
			<img class="item highlight" src="images/beloit-2013.jpg" alt="" />
			<img class="item" src="images/mount-tom-2022.jpg" alt="" />
			<img class="item " src="images/four-corners-2022.jpg" alt="" />
			<img class="item" src="images/harrington-2022.jpg" alt="" />
			<img class="item highlight" src="images/beloit-2022.jpg" alt="" />
			<img class="item highlight" src="images/brayton-2022.jpg" alt="" />
		</div>
		<div id="hed">
			<Hed
				><span slot="hed">
					How Dirty Coal Power Could Get a Greener Second Life
				</span>
				<span slot="byline">Elena Shao</span></Hed
			>
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
		height: 100vh;
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
		filter: brightness(40%) contrast(120%);
	}

	#hed {
		margin: auto;
		padding: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 25vh;
		opacity: 0%;
		visibility: hidden;
	}

	/* STEP CONTENT STYLING */

	/* the container for each step */
	.step {
		height: 110vh;
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
		z-index: 1;
	}

	/* this makes the element stand out if it is active */
	.step.active .step-content {
		background: white;
		color: black;
	}
</style>
