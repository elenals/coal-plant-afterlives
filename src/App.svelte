<script>
	/***************/
	/*** IMPORTS ***/
	/***************/

	/* IMPORTING COMPONENTS */
	import Map from "./Map.svelte";
	import Content from "./Content.svelte";
</script>

<svelte:head>
	<!-- IMPORTING GOOGLE FONTS -->
	<!-- 
			CSS rules to specify the families:
			font-family: 'Chivo', sans-serif;
			font-family: 'Marcellus', serif;
			font-family: 'Spectral', serif;
			font-family: 'Spline Sans Mono', monospace;
	-->

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Marcellus&family=Spectral:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400;1,700;1,800&family=Spline+Sans+Mono:wght@300;500;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Content
	hed="Coal Plant Afterlives"
	byline="Elena Shao"
	content="<p>Across the country, coal-fired power plants like TKTK are powering down, squeezed out by cheaper natural gas and renewable energy and tougher emissions regulations. The pattern, while promising for a greener future, also ends up leaving behind a toxic legacy of industrial pollution and waste. In coal dependent communities, the transition away from coal can disrupt families and economies.</p>"
/>

<style>
	:global(body) {
		margin: 0px;
		padding: 0px;
	}
</style>
