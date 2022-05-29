<script>
	export let beforeImg;
	export let afterImg;

	/* importing dependencies */
	import { onMount } from "svelte";
	import * as d3 from "d3"; // D3.js

	let layer;

	onMount(async () => {
		layer = d3.select("#img-after"); // selecting the after image as the layer
		d3.select(".slider").on("mousemove", (event) => {
			// the following code "clips" the layer so only part of it is visible
			layer.style("clip-path", `inset(0 0 0 ${event.pageX}px)`);
		});
	});
</script>

<section>
	<div class="slider">
		<div
			class="layer"
			id="img-before"
			style="background-image: url({beforeImg});"
		/>
		<div
			class="layer"
			id="img-after"
			style="background-image: url({afterImg});"
		/>
	</div>
</section>

<style>
	.slider {
		text-align: center;
		justify-content: center;
		cursor: ew-resize;
		position: relative;
		overflow: visible;
		height: 100vh;
		width: 100vw;
	}
	.slider .layer {
		height: 100vh;
	}
	#img-before {
		max-width: 100%;
		min-width: 100%;
		position: absolute;
		background-size: 100%, auto;
	}
	#img-after {
		max-width: 100%;
		min-width: 100%;
		position: absolute;
		background-size: 100%, auto;
	}
</style>
