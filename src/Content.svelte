<script>
</script>

<section>
	<div class="container">
		<p><slot name="content" /></p>
	</div>
</section>

<style>
	section {
		text-align: center;
		justify-content: center;
		width: 100%;
		overflow: hidden;
		padding: 0;
	}

	p {
		text-align: left;
		font-family: "HK Grotesk";
		font-size: 1.1rem;
	}

	.container {
		text-align: center;
		width: 30vw;
		margin: auto;
		overflow: hidden;
		padding-top: 5vh;
		padding-bottom: 10vh;
	}
</style>
