<script>
	/* IMPORTS */
	import Grid from "./Grid.svelte";
	import Content from "./Content.svelte"; // reusable heading & content component
	import Map from "./Map.svelte";
	import Sliders from "./Sliders.svelte";
	import Image from "./Image.svelte";
	import Footer from "./Footer.svelte";
</script>

<svelte:head>
	<!-- CSS 
	font-family: 'Chivo', sans-serif;
	font-family: 'IBM Plex Mono', monospace;
	font-family: 'Spectral', serif;
	font-family: 'HK Grotesk', sans-serif;
-->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Spectral:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400;1,700;1,800&display=swap"
		rel="stylesheet"
	/>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/hk-grotesk.min.css"> 

</svelte:head>

<Grid
	step0="<p>Over the last decade, coal has quickly garnered global distaste due to its polluting nature and its role in exacerbating the climate crisis. The fossil fuel has become almost synonymous with dirty power.</p>"
	step1="<p>Many coal plants, like those pictured here, have already retired, or are planning to within the next few years.</p>"
	step2="<p>After retirement, most coal plants and mines are abandoned, with no plans for clean-up or redevelopment. But in recent years, a number are being repurposed for renewable energy projects, like solar photovoltaic facilities or wind turbines.</p>"
	step3="<p>Some believe these projects will serve as a blueprint for how to navigate the green energy transition, but others note that there's still far to go when it comes to addressing the toxic legacy coal decommissioning leaves behind.</p>"
/>

<Content>
	<span slot="content">
		<p>
			Across the country, coal-fired power plants are powering down, squeezed
			out by cheaper natural gas, cleaner renewable energy and tougher emissions
			regulations.
		</p>
		<p>
			The pattern, while promising for a greener future, also ends up leaving
			behind a toxic legacy of industrial pollution and waste that lasts long
			past the lifecycle of the coal plant or the coal mine, especially as
			remediation and clean-up lags. A
			<a
				href="https://www.ucsusa.org/sites/default/files/attach/2017/09/A-Dwindling-Role-for-Coal-fact-sheet.pdf"
				>report</a
			>
			from the Union of Concerned Scientists found that 95% of shuttered coal sites
			were unremediated, as of four years ago.
		</p>
		<p>
			That could change. In recent years, utilities and private companies alike
			have seen an opportunity to give coal plants an unexpectedly “green”
			second life. A number of retiring coal plants will be repurposed — instead
			of just abandoned or decommissioned — into renewable energy operations,
			like solar panels, wind turbines and battery storage.
		</p>
	</span>
</Content>

<Map
	step0="<p>Coal-fired generation increased steadily from 1950 to 2011, when U.S. coal-fired capacity peaked at 318 gigawatts.</p>"
	step1="<p>That year, coal provided 22% of the country's energy production. While it far surpassed crude oil, nuclear power and renewable energy, for the first time, coal fell behind natural gas, which sourced almost a quarter of U.S. energy production.</p>"
	step2="<p>Since then, coal consumption and generation has declined substantially. Many old coal-fired plants retired or switched to cheaper fuels, and few plants came online in their place. At least 615 coal plants retired between 2011 and 2022, totaling more than 105 gigawatts of capacity.</p>"
	step3="<p>And even more coal plants are expected to retire over the next few decades as the U.S. seeks to clean its power grid of fossil fuels by 2030.</p>"
/>

<Content>
	<span slot="content">
		<p>
			In California's Morro Bay, a power plant's three 450-feet-high smokestacks
			still remain, despite the plant shutting down more than eight years ago.
			Morro Bay Power Plant began burning coal in the 1950s, and later converted
			to burn natural gas.
		</p>
		<p>
			Morro Bay City Council voted last year to demolish the stacks, but even
			that might not happen until 2027, according to the city's agreement with
			owner Vistra Company. The energy company hopes to place a <a
				href="https://www.morro-bay.ca.us/DocumentCenter/View/15093/Vistra---Morro-Bay---Battery-Project-Presentation-022021"
				>battery storage facility</a
			> on the defunct power plant lands.
		</p>
	</span>
</Content>

<Image src="images/morro-bay.svg" alt="Three Stacks, Morro Bay Power Plant"
	>Morro Bay Power Plant's “Three Stacks.” The smokestacks have been visible for
	so long that a local brewing company named itself “Three Stacks and a Rock.” <i
		>(Courtesy of Google Earth, Wikimedia Commons).</i
	></Image
>

<Content
	><span slot="content">
		<p>
			When aging coal plants shut down, some are demolished and flattened. They
			may undergo the multi-year process of decommissioning and remediation,
			which involves cleaning up soil and water contamination.
		</p>
		<p>
			But, there is no legal requirement to demolish and remediate a retiring
			power plant. In most cases, plant operators aren't responsible for
			cleaning up the contamination or pollution that the coal plant has left
			behind. The onus falls on a developer willing to purchase the plant and
			pay the costs of cleanup and reclamation, or more often, on taxpayers.
		</p>
		<p>
			“It's a very long process to remediate a coal site,” said Jessica
			Collingsworth, the lead energy policy analyst for the Union of Concerned
			Scientists. “Ultimately, the polluters should be on the hook to pay for
			remediation.”
		</p>
	</span></Content
>

<Sliders />

<Content
	><span slot="content">
		<p>
			Due to limited public funds and lack of incentives, most retired coal
			plants are often left to crumble away, unused.
		</p>
		<p>
			Yet, opportunity abounds on shuttered coal plants, where transmission
			lines and infrastructure already exist and could be repurposed for use by
			a renewable energy project.
		</p></span
	></Content
>

<Footer
	><p>
		This project was conceptualized as a news application site to be completed
		during the Spring quarter of 2022 while enrolled in COMM 289P: Journalism
		Thesis. It was submitted to the Communications Department on June 1, 2022,
		in partial fulfillment of the requirements for a degree of Master of Arts in
		Communications, Journalism Track at Stanford University.
	</p>
	<p>
		<b>Sources:</b> Satellite images were taken between 2010 and 2022, and
		compiled using
		<a href="https://earthengine.google.com/ ">Google Earth Engine Pro</a>
		and satellite imagery from Maxar Technologies and Landsat Missions. Power plant
		retirement data was collected by the U.S. Energy Information Administration through
		their
		<a href="https://www.eia.gov/electricity/data/eia860/">Form EIA-860</a>.
		Detailed documentation regarding data cleaning and analysis can be found
		<a
			href="https://github.com/elenals/coal-plant-afterlives/blob/main/README.md"
			>here</a
		>. Data on repurposing and redevelopment projects were manually compiled
		from news searches and data from the U.S. Environmental Protection Agency's
		<a href="https://www.epa.gov/re-powering"
			>RE-Powering America Tracking Index</a
		>.
	</p>
	<p>
		<b>Methodology:</b> All of the code and data for this project site is
		accessible <a href="https://github.com/elenals/coal-plant-afterlives">here</a>. This news application was built primarily with
		<a href="https://svelte.dev/">Svelte.js</a>, an open-source compiler for
		building web apps. Interactive visualizations were built with
		<a href="https://d3js.org/">D3.js</a>, a JavaScript library for visualizing
		data and building graphs. Images were edited and designed using Adobe
		Photoshop, Adobe Illustrator, and <a href="http://ai2html.org/">ai2html</a>,
		an open-source Adobe Illustrator script that converts Illustrator documents
		into html for the web.
	</p>
	<p>
		Many thanks to my mentor and thesis advisor, <a
			href="https://journalism.stanford.edu/people/serdar-tumgoren"
			>Serdar Tumgoren.</a
		>
	</p>
</Footer>

<style>
	
	/* importing custom fonts */
	/*
	@font-face {
		font-family: "HK Grotesk";
		font-weight: black;
		src: url("/fonts/HKGrotesk-Black.woff") format("woff");
	}

	@font-face {
		font-family: "HK Grotesk";
		font-style: italic;
		font-weight: black;
		src: url("/fonts/HKGrotesk-BlackItalic.woff") format("woff");
	}

	@font-face {
		font-family: "HK Grotesk";
		font-weight: bold;
		src: url("/fonts/HKGrotesk-Bold.woff") format("woff");
	}

	@font-face {
		font-family: "HK Grotesk";
		font-style: italic;
		font-weight: black;
		src: url("/fonts/HKGrotesk-BoldItalic.woff") format("woff");
	}

	@font-face {
		font-family: "HK Grotesk";
		font-style: italic;
		src: url("/fonts/HKGrotesk-Italic.woff") format("woff");
	}

	@font-face {
		font-family: "HK Grotesk";
		font-weight: normal;
		src: url("/fonts/HKGrotesk-Regular.woff") format("woff");
	}

	/* global and top-level component styles */
	:global(body) {
		margin: 0px;
		padding: 0px;
		background-color: #ffe2ce;
	}
	*/

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
</style>
