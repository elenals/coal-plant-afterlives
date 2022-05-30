<script>
	export let hed = "";
	export let byline = "";
</script>

<section>
	<div class="container">
		{#if { hed } != ""}
			<h1>{hed}</h1>
		{/if}
		{#if { byline } != ""}
			<h2><a href="https://github.com/elenals">{byline}</a></h2>
		{/if}
		<p><slot name="content" /></p>
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
		font-size: 3rem;
		line-height: 2.75rem;
		font-weight: 900;
		margin-top: 10vh;
	}

	h2 {
		text-align: center;
		font-family: "Fira Code", monospace;
		font-size: 1rem;
		font-weight: 400;
		text-transform: uppercase;
	}

	p {
		text-align: left;
		font-family: "Chivo", sans-serif;
		font-size: 1.15rem;
	}

	a {
		display: inline-block;
		position: relative;
		color: #e76f51;
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
		background-color: #e76f51;
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
