<script>
	/* import Russell Goldenberg's Scrolly component 
	(from https://t.co/l8fOJaiwkX) */
	import Scroll from "./Scrolly.svelte";

	/* import d3
	make sure to run "npm install d3" to install the d3 dependency */
	import * as d3 from "d3";
	import data from "./assets/counties-10m.json";
	import { onMount } from "svelte";
	import { feature } from "topojson";

	/* set up */
	let w = 840;
	let h = 640;
	let m = { top: 20, right: 20, bottom: 20, left: 20 };

	/* define a MAP PROJECTION and a PATH GENERATOR */
	const projection = d3.geoAlbersUsa().translate([w / 2, h / 2]);
	const path = d3.geoPath().projection(projection);
	console.log(data);
</script>

<section>
	<div id="map-container">
		<svg {w} {h} />
	</div>
</section>

<style>
	#map-container {
		width: 840px;
		height: 640px;
		text-align: center;
		position: sticky;
		padding: 20px 20px 20px 20px;
	}
</style>
