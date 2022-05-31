<script>
	export let beforeImg = "";
	export let afterImg = "";

	/* importing dependencies */
	import { onMount } from "svelte";
	import * as d3 from "d3"; // D3.js

	let layer;

	onMount(async () => {
		// the following code "clips" the layer so only part of it is visible
		d3.selectAll(".slider").on("mousemove", (event) => {
			layer = d3.selectAll(".after"); // selecting the after image as the layer
			console.log(event.pageX);
			layer.style("clip-path", `inset(0 0 0 ${event.offsetX}px)`); // ${event.pageX}
		});
	});
</script>

<div />

<div class="slider">
	<img class="before" src={beforeImg} alt="" />
	<img class="after" src={afterImg} alt="" />
</div>

<style>
	.slider {
		cursor: none;
		position: relative;
		overflow: visible;
		width: 100%;
		height: 100%;
	}

	img {
		width: 100%;
	}

	.before {
		max-width: 100%;
		min-width: 100%;
		position: absolute;
	}

	.after {
		max-width: 100%;
		min-width: 100%;
		position: absolute;
	}
</style>
