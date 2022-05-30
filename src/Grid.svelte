<script>
	import Scrolly from "./Scrolly.svelte";
</script>

<section>
	<div class="container">
		<img class="item" src="images/beloit-2013.jpg" alt="" />
		<img class="item" src="images/beloit-2013.jpg" alt="" />
		<img class="item" src="images/beloit-2013.jpg" alt="" />
		<img class="item" src="images/beloit-2013.jpg" alt="" />
		<img class="item" src="images/beloit-2013.jpg" alt="" />
		<img class="item" src="images/beloit-2013.jpg" alt="" />
		<img class="item" src="images/beloit-2013.jpg" alt="" />
		<img class="item" src="images/beloit-2013.jpg" alt="" />
		<img class="item" src="images/beloit-2013.jpg" alt="" />
		<img class="item" src="images/beloit-2013.jpg" alt="" />
		<img class="item" src="images/beloit-2013.jpg" alt="" />
		<img class="item" src="images/beloit-2013.jpg" alt="" />
		<img class="item" src="images/beloit-2013.jpg" alt="" />
		<img class="item" src="images/beloit-2013.jpg" alt="" />
		<img class="item" src="images/beloit-2013.jpg" alt="" />
		<img class="item" src="images/beloit-2013.jpg" alt="" />
	</div>
</section>

<style>
	section {
		width: 100vw;
		height: 100vh;
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
	}

	img {
		filter: brightness(60%) contrast(110%);
	}
</style>
