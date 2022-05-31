<script>
</script>

<div class="container">
	<h1><slot name="hed" /></h1>
	<h2>
		By <a href="https://github.com/elenals"><slot name="byline" /></a>
	</h2>
</div>

<style>
	h1 {
		color: #e76f51;
		text-align: center;
		font-family: "Chivo", sans-serif;
		font-size: 4rem;
		line-height: 4rem;
		font-weight: 900;
		margin-top: 10vh;
	}

	h2 {
		color: #e76f51;
		text-align: center;
		font-family: "IBM Plex Mono", monospace;
		font-size: 1rem;
		font-weight: bold;
		text-transform: uppercase;
	}

	a {
		display: inline-block;
		position: relative;
		color: #e1917d;
		text-decoration: none;
	}

	a:after {
		content: "";
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 3px;
		left: 0;
		bottom: 0;
		background-color: #e1917d;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	a:hover:after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}

	.container {
		text-align: center;
		width: 750px;
		margin: auto;
	}
</style>
