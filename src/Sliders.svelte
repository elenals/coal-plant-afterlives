<script>
	import Slider from "./Slider.svelte";
</script>

<section>
	<!-- images must be in the "public" folder to be accessible here -->

	<div class="images">
		<div class="img">
			<h4>Title</h4>
			<p>Details</p>
			<Slider
				beforeImg="images/beloit-2013.jpg"
				afterImg="images/beloit-2022.jpg"
			/>
		</div>
		<div class="img">
			<h4>Title</h4>
			<p>Details</p>
			<Slider
				beforeImg="images/beloit-2013.jpg"
				afterImg="images/beloit-2022.jpg"
			/>
		</div>
		<div class="img">
			<h4>Title</h4>
			<p>Details</p>
			<Slider
				beforeImg="images/beloit-2013.jpg"
				afterImg="images/beloit-2022.jpg"
			/>
		</div>
		<div class="img">
			<h4>Title</h4>
			<p>Details</p>
			<Slider
				beforeImg="images/beloit-2013.jpg"
				afterImg="images/beloit-2022.jpg"
			/>
		</div>
		<div class="img">
			<h4>Title</h4>
			<p>Details</p>
			<Slider
				beforeImg="images/beloit-2013.jpg"
				afterImg="images/beloit-2022.jpg"
			/>
		</div>
		<div class="img">
			<h4>Title</h4>
			<p>Details</p>
			<Slider
				beforeImg="images/beloit-2013.jpg"
				afterImg="images/beloit-2022.jpg"
			/>
		</div>
	</div>
</section>

<style>
	section {
		height: 100vh;
	}
	.images {
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.img {
		flex: 0 32%;
		margin: auto;
		min-width: 0;
		padding-bottom: 18%; /* 32:18, i.e. 16:9 */
		margin-bottom: 2%; /* (100-32*3)/2 */
	}

	h4 {
		padding: 0;
		margin: 0;
		text-align: left;
		font-family: "Chivo", sans-serif;
		font-size: 1.15rem;
	}

	p {
		padding: 0;
		margin: 0;
		text-align: left;
		font-family: "Fira Code", monospace;
		font-size: 0.85rem;
		font-weight: 400;
		text-transform: uppercase;
		padding-bottom: 5px;
	}
</style>
