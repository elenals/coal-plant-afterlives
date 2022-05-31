<script>
	export let src;
	export let alt;
</script>

<section>
	<div id="image">
		<img {src} {alt} />
		<div id="caption">
			<p>
				<slot />
			</p>
		</div>
	</div>
</section>

<style>
	p {
		color: #e76f51;
		font-size: 0.85rem;
		font-family: "IBM Plex Mono", monospace;
	}

	#image {
		width: 50vw;
		margin: auto;
		text-align: left;
		vertical-align: bottom;
		position: relative;
	}

	#caption {
		width: 15vw;
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 10;
	}
</style>
