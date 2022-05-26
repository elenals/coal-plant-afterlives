<script>
	/***************/
	/*** IMPORTS ***/
	/***************/
	import Map from "./Map.svelte";
	import Grid from "./Header.svelte";
</script>

<svelte:head>
	<!-- importing Google Fonts -->
	<!-- CSS rules to specify the families:
		font-family: 'IBM Plex Mono', monospace;
		font-family: 'Space Grotesk', sans-serif;
		font-family: 'Spectral', serif;
		-->

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@400;500;600;700&family=Spectral:ital,wght@0,400;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Grid />
<Map />

<style>
	:global(body) {
		margin: 0px;
		padding: 0px;
	}
</style>
