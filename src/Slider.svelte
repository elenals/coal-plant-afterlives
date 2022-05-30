<script>
	export let beforeImg;
	export let afterImg;
	export let caption = "";
	export let w = "550px";
	export let h = "300px";

	/* importing dependencies */
	import { onMount } from "svelte";
	import * as d3 from "d3"; // D3.js

	let layer;

	onMount(async () => {
		layer = d3.selectAll("#img-after"); // selecting the after image as the layer
		d3.selectAll(".slider").on("mousemove", (event) => {
			// the following code "clips" the layer so only part of it is visible
			layer.style("clip-path", `inset(0 0 0 ${event.pageX - 255}px)`);
		});
	});
</script>

<div style="width:{w}; height:{h}">
	<div><p>{caption}</p></div>
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
</div>

<style>
	.slider {
		cursor: none;
		position: relative;
		overflow: visible;
		height: 100%;
		width: 100%;
	}
	.slider .layer {
		height: 100%;
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
	p {
		text-align: left;
		font-family: "Chivo", sans-serif;
		font-size: 1.15rem;
	}
</style>
