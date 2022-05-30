<script>
	/* IMPORTS */
	import Slider from "./Slider.svelte"; // reusable heading & content component
</script>

<section>
	<!-- images must be in the "public" folder to be accessible here -->
	<div class="container">
		<Slider
			beforeImg="images/beloit-2013.jpg"
			afterImg="images/beloit-2022.jpg"
		/>
		<Slider
			beforeImg="images/mount-tom-2014.jpg"
			afterImg="images/mount-tom-2022.jpg"
		/>
		<Slider
			beforeImg="images/rio-bravo-poso-2016.jpg"
			afterImg="images/rio-bravo-poso-2022.jpg"
		/>
		<Slider
			beforeImg="images/wood-river-2015.jpg"
			afterImg="images/wood-river-2022.jpg"
		/>
	</div>
</section>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		column-gap: 20px;
		row-gap: 50px;
	}
</style>
