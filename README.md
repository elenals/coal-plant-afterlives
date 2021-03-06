# Coal Plant Afterlives

This project was conceptualized as a [news application site](https://elenals.github.io/coal-plant-afterlives/) to be completed during the Spring quarter of 2022 while enrolled in COMM 289P: Journalism Thesis.

A version of this project was submitted to the Communications Department on June 1, 2022, in partial fulfillment of the requirements for a degree of Master of Arts in Communications, Journalism Track at Stanford University.

Many thanks to my mentor and thesis advisor, Serdar Tumgoren.

## Methodology & Resources

This news application was built primarily with [Svelte.js](https://svelte.dev/), an open-source compiler for building web apps. Interactive visualizations were built with [D3.js](https://d3js.org/), a JavaScript library for visualizing data and building graphs. Images were edited and designed using Adobe Photoshop, Adobe Illustrator, and [ai2html](http://ai2html.org/), an open-source Adobe Illustrator script that converts Illustrator documents into HTML for the web.

This news application uses Russell Goldenberg's [Scrollytelling Svelte.js component](https://svelte.dev/repl/3d3736e634c9404ea8ec2ef7b87e2053?version=3.42.4). The `IBM Plex Mono` and `Chivo` fonts were imported from [Google Fonts](https://fonts.google.com/). The `HK Grotesk` font is a free font created by [Hanken Design Co](https://www.fontsquirrel.com/fonts/hk-grotesk).

## Data Sources

Satellite images were taken between 2010 and 2022, and compiled using [Google Earth Engine Pro](https://earthengine.google.com/) and satellite imagery from Maxar Technologies and Landsat Missions.

Power plant retirement data was collected by the U.S. Energy Information Administration through their Form EIA-860. Detailed documentation regarding data cleaning and analysis can be found below.

Data on repurposing and redevelopment projects were manually compiled from news searches and data from the U.S. Environmental Protection Agency’s [RE-Powering America Tracking Index](https://www.epa.gov/re-powering).

### Power Plant Retirements

To show information related to **retired, currently operating, and planned retirements of power plants across the U.S.**, I am using data provided by the U.S. Energy Information Administration (EIA), which they prepare from the Form EIA-860.

The [Form EIA-860](https://www.eia.gov/electricity/data/eia860) collects generator-level information about existing and planned generators with 1 megawatt (MW) or greater of combined nameplate capacity. The EIA also supplements the annual survey form with a monthly survey, [Form EIA-860M](https://www.eia.gov/electricity/data/eia860m/). Monthly data is the most updated, but has not been fully verified by the EIA.

The most recent annual dataset is from 2020, so I am using a monthly dataset from the month of February 2022 for the current inventory of power plants.

First, I concated concatenate the sheets `Operating`, `Planned`, and `Retired` and deleted unnecessary columns. Then, I used [OpenRefine](https://openrefine.org/download.html) to group technology into types:

- Wood/Wood Waste Biomass, Other Waste Biomass &rarr; `Biomass`
- Solar Thermal with Energy Storage, Solar Thermal without Energy Storage, and Solar Photovoltaic &rarr; `Solar`
- Onshore Wind Turbine, Offshore Wind Turbine &rarr; `Wind Turbine`
- Hydroelectric Pumped Storage, Conventional Hydroelectric &rarr; `Hydroelectric`
- Petroleum Coke, Petroleum Liquids &rarr; `Petroleum Coke & Liquids`
- Natural Gas with Compressed Air Storage, Natural Gas Fired Combustion Turbine, Natural Gas Fired Combined Cycle, Natural Gas Steam Turbine, Natural Gas Internal Combustion Engine, Other Natural Gas &rarr; `Natural Gas`
- Coal Integrated Gasification Combined Cycle, Conventional Steam Coal &rarr; `Coal`
- Landfills, Municipal Solid Waste &rarr; `Landfills & Municipal Solid Waste`
- Flywheels, Other Gases, All Other &rarr; `Other`

and to give full names for state abbreviations:

- AZ &rarr; `Arizona`

## Building & Deploying the Svelte App

To create a new project based on the [Svelte template](https://github.com/sveltejs/template) using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

Install the dependencies

```bash
cd svelte-app
npm install
```

and then start [Rollup](https://rollupjs.org) and navigate to [localhost:8080](http://localhost:8080), where you should see your app running.

```bash
npm run dev
```

### Requirements

Install [d3](https://www.npmjs.com/package/d3):

```bash
npm install --save-dev d3
```

Install [topojson](https://www.npmjs.com/package/topojson):

```bash
npm install --save-dev topojson
```

Install [svelte-image-gallery](https://www.npmjs.com/package/svelte-image-gallery):

```bash
npm install --save-dev svelte-image-gallery
```

### Deploy

These instructions are adapted from [this tutorial](https://www.devsamples.com/javascript/svelte/deploy-svelte-app-gh-pages).

To deploy the Svelte app with GitHub Pages, first create a `gh-pages` branch in the root of the repository.

```bash
git checkout -b "gh-pages"
```

After creating the static Svelte site, download the `gh-pages` package:

```bash
npm i gh-pages
```

After installation, create a new file called `gh-pages.js` at the root of the repository with the following contents:

```js
const ghpages = require("gh-pages");
ghpages.publish(
	"public", // path to public directory
	{
		branch: "gh-pages",
		repo: "https://github.com/elenals/coal-plant-afterlives", // point to your repo on GitHub
		user: {
			name: "NAME",
			email: "EMAIL",
		},
		dotfiles: true,
	},
	() => {
		console.log("Deploy Complete!");
	}
);
```

Update the links in the index.html (located at `/public/index.html`) so that they are relative paths.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width,initial-scale=1" />

		<title>Coal Plant Afterlives</title>

		<link rel="icon" type="image/png" href="./favicon.png" />
		<link rel="stylesheet" href="./global.css" />
		<link rel="stylesheet" href="./build/bundle.css" />

		<script defer src="./build/bundle.js"></script>
	</head>

	<body></body>
</html>
```

In the `.gitignore` file, make sure to comment out the contents of the `/public/build/` directory.

```
/node_modules/
# /public/build/
.DS_Store
```

Now, build and deploy your Svelte application:

```bash
# Build
npm run build
# Commit and push changes
git add .
git commit -m "commit message"
git push origin gh-pages
# Deploy
node ./gh-pages.js
```

If you had already set up GitHub pages previously, make sure to update the the Source to `/root` of the `gh-pages` Branch.

This project's site is now published at: https://elenals.github.io/coal-plant-afterlives/.
