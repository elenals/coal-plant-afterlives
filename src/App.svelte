<script>
	/* IMPORTS */
	import Content from "./Content.svelte"; // reusable heading & content component
	import Map from "./Map.svelte";
</script>

<svelte:head>
	<!-- importing Google Fonts -->
	<!-- 
			CSS rules to specify the families:
			font-family: 'Chivo', sans-serif;
			font-family: 'Fira Code', monospace;
			font-family: 'Marcellus', serif;
			font-family: 'Spectral', serif;
	-->

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Fira+Code:wght@300;500;700&family=Marcellus&family=Spectral:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400;1,700;1,800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Content
	hed="Coal Plant Afterlives"
	byline="Elena Shao"
	content="<p>Across the country, coal-fired power plants like TKTK are powering down, squeezed out by cheaper natural gas and renewable energy and tougher emissions regulations.</p> <p>The pattern, while promising for a greener future, also ends up leaving behind a toxic legacy of industrial pollution and waste. In coal dependent communities, the transition away from coal can disrupt families and economies.</p>"
/>

<Map
	step0="<p>Coal-fired generation increased steadily from 1990 to 2011, when U.S. coal-fired capacity <a href='https://www.eia.gov/totalenergy/data/annual/archive/038411.pdf'>peaked</a> at 318 gigawatts.</p>"
	step1="<p>That year, coal provided 22% of the country’s energy production. While coal far surpassed crude oil at 12%, nuclear power at 8% and renewable energy (which totalled 11%, combined), 2011 was the first year natural gas outpaced coal, sourcing almost a quarter of U.S. energy production.</p>"
	step2="<p>Since then, coal consumption and generation has declined substantially. Many old coal fired plants retired or switched to cheaper fuels, and few plants came online in their place. XX coal plants retired between 2011 and 2022, taking with them XX gigawatts of energy production.</p>"
	step3="<p>Even more coal plants are expected to retire over the next few decades as the U.S. seeks to clean its power grid of fossil fuels by 2030.</p>"
/>

<style>
	@import url("https://rsms.me/inter/inter.css");
	:global(body) {
		margin: 0px;
		padding: 0px;
	}
</style>
