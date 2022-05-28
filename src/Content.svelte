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
			<p>{content}</p>
		{/if}
	</div>
</section>

<style>
	section {
		text-align: center;
		width: 100vw;
		overflow: hidden;
	}

	h1 {
		text-align: center;
		font-family: "Chivo", sans-serif;
		font-size: 50px;
		font-weight: 900;
	}

	h2 {
		text-align: center;
		font-family: "Spline Sans Mono", monospace;
		font-size: 18px;
		font-weight: 400;
		text-transform: uppercase;
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
</style>
