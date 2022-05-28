<script>
	export let hed = "";
	export let byline = "";
	export let subhed = "";
	export let content = "";
</script>

<section>
	<div class="container">
		{#if { hed } != ""}
			<h1>{hed}</h1>
		{/if}
		{#if { byline } != ""}
			<h2>By <a href="https://github.com/elenals">{byline}</a></h2>
		{/if}
		{#if { subhed } != ""}
			<h3>{subhed}</h3>
		{/if}
		{#if { content } != ""}
			<p>{@html content}</p>
		{/if}
	</div>
</section>

<style>
	section {
		text-align: center;
		justify-content: center;
		width: 100vw;
		overflow: hidden;
	}

	h1 {
		text-align: center;
		font-family: "Chivo", sans-serif;
		font-size: 4rem;
		font-weight: 900;
		width: 700px;
	}

	h2 {
		text-align: center;
		font-family: "Spline Sans Mono", monospace;
		font-size: 1rem;
		font-weight: 400;
		text-transform: uppercase;
	}

	h3 {
		text-align: left;
		font-family: "Chivo", sans-serif;
		font-size: 2rem;
		font-weight: 700;
	}

	p {
		text-align: left;
		font-family: "Spectral", serif;
		font-size: 1.25rem;
	}

	a {
		display: inline-block;
		position: relative;
		color: rgb(46, 46, 46);
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
		background-color: rgb(46, 46, 46);
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	a:hover:after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}

	.container {
		text-align: center;
		width: 600px;
		margin: auto;
	}
</style>
