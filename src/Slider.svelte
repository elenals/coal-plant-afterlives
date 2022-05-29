<script>
	/* importing sub-components */
	export let beforeImg;
	export let afterImg;

	/* importing dependencies */
	import { onMount } from "svelte";
	import * as d3 from "d3"; // D3.js

	let layer;

	onMount(async () => {
		layer = d3.select("#img-after"); // selecting the after image as the layer
		d3.select(".container").on("mousemove", (event) => {
			// the following code "clips" the layer so only part of it is visible
			layer.style("clip-path", `inset(0 0 0 ${event.pageX}px)`);
		});
	});
</script>

<section>
	<div class="container">
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
	*,
	section {
		text-align: center;
		justify-content: center;
		display: flex;
		margin: 0px;
		padding: 0px;
		border: 0px;
	}
	.container {
		text-align: center;
		justify-content: center;
		cursor: ew-resize;
		position: relative;
		overflow: visible;
		height: 100vh;
		width: 100vw;
	}
	.container .layer {
		height: 100vh;
	}
	#img-before {
		max-width: 100vw;
		min-width: 100vw;
		position: absolute;
		background-size: 100% auto !important;
		filter: brightness(70%) contrast(120%);
	}
	#img-after {
		max-width: 100vw;
		min-width: 100vw;
		position: absolute;
		background-size: 100% auto !important;
		filter: brightness(70%) contrast(120%);
	}

	#info {
		position: absolute;
		color: white;
		font-size: 14px;
		font-weight: 800;
		text-transform: uppercase;
		font-family: "IBM Plex Mono", monospace;
		text-shadow: 0px 0px 10px #000;
		bottom: 20vh;
	}
</style>
