<script>
	import Slider from "./Slider.svelte";
	import { tooltip } from "./tooltip";
</script>

<section>
	<!-- images must be in the "public" folder to be accessible here -->
	<h3 id="title">Repurposing Coal-Fired Plants for Green(er) Energy</h3>
	<div class="images">
		<div class="img">
			<h4>
				Mount Tom Station <span
					class="info"
					content="<p>Mount Tom Station was the last coal-fired plant in Western Massachusetts when it retired in 2014 after operating for more than five decades. The plant stopped being profitable by 2009 due to the natural gas boom in the U.S. In 2018, Mount Tom Station transformed into the state’s largest solar farm and largest utility-scale energy storage system.</p>"
					use:tooltip>i</span
				>
			</h4>
			<p>SOLAR PROJECT & BATTERY ENERGY STORAGE</p>
			<Slider
				beforeImg="images/mount-tom-2014.jpg"
				afterImg="images/mount-tom-2022.jpg"
			/>
			<div class="location">Holyoke, MA</div>
		</div>

		<div class="img">
			<h4>
				Coal Creek Station <span
					class="info"
					content="<p>Coal Creek was supposed to close in 2022, after operating for more than 40 years. Its former owner, Great River Energy, considered using the transmission lines that were already there to supply the abundant wind power nearby after retiring its coal operations. But, due to a confluence of issues — anti-renewable laws and regulations, political pressure from state officials concerned with preserving coal jobs — halted that plan. Instead, state regulators approved the sale of Coal Creek to Rainbow Energy Marketing Corp., which plans to use government subsidies to retrofit the plant with a carbon capture system.</p>"
					use:tooltip>i</span
				>
			</h4>
			<p>POTENTIAL WIND, CARBON CAPTURE</p>
			<Slider
				beforeImg="images/coal-creek-2021.jpg"
				afterImg="images/coal-creek-2022.jpg"
			/>
			<div class="location">Underwood, ND</div>
		</div>

		<div class="img">
			<h4>
				Brayton Point Power Plant <span
					class="info"
					content="<p>The Brayton plant, Massachusett’s last coal plant, shuttered in 2017 after more than five decades of operation. In 2022, Gov. Charlie Baker announced plans to turn the plant into a $200 million facility for manufacturing undersea transmission lines that will connect the state’s power grid to offshore wind turbines.</p>"
					use:tooltip>i</span
				>
			</h4>
			<p>OFFSHORE WIND MANUFACTURING</p>
			<Slider
				beforeImg="images/brayton-2018.jpg"
				afterImg="images/brayton-2022.jpg"
			/>
			<div class="location">Somerset, MA</div>
		</div>

		<div class="img">
			<h4>
				Sherburne County Generating Station <span
					class="info"
					content="<p>Sherburne County Generating Station, also known as Sherco, is the state’s largest power plant, employing about 300 people and providing 75% of the city’s tax base. Owner Xcel Energy will install a 460-megawatt solar project near the coal plant once it closes, utilizing the transmission lines and infrastructure that’s already in place.</p>"
					use:tooltip>i</span
				>
			</h4>
			<p>SOLAR PROJECT</p>
			<Slider
				beforeImg="images/sherco-2012.jpg"
				afterImg="images/sherco-2022.jpg"
			/>
			<div class="location">Becker, MN</div>
		</div>

		<div class="img">
			<h4>
				Hayden Generating Station <span
					class="info"
					content="<p>Two of the units at the Hayden Generating Station will close by 2028,  ahead of schedule. The Sierra Club has urged owners Xcel Energy to replace the units with wind power. Xcel Energy has considered turning the units into a molten salt energy storage facility to support its growing renewable energy sources. Molten salts are heated and stored when the grid receives excess energy and pumped into steam when energy is needed.</p>"
					use:tooltip>i</span
				>
			</h4>
			<p>MOLTEN SALT ENERGY STORAGE</p>
			<Slider
				beforeImg="images/hayden-2021.jpg"
				afterImg="images/hayden-2022.jpg"
			/>
			<div class="location">Hayden, CO</div>
		</div>

		<div class="img">
			<h4>
				Beloit Coal Ash Landfill <span
					class="info"
					content="<p>Wisconsin’s largest solar project was installed on top of a coal ash landfill near the Riverside Energy Center and the Rock River Generating Station. Coal ash is the waste that’s left behind after coal is burned. It is toxic, and often stored in large “ponds” or landfills that can leak and contaminate nearby land and groundwater.</p>"
					use:tooltip>i</span
				>
			</h4>
			<p>SOLAR PROJECT</p>
			<Slider
				beforeImg="images/beloit-2013.jpg"
				afterImg="images/beloit-2022.jpg"
			/>
			<div class="location">Beloit, WI</div>
		</div>
	</div>
</section>

<style>
	section {
		width: 70vw;
		margin: auto;
	}

	.images {
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.img {
		position: relative;
		flex: 0 32%;
		margin: auto;
		min-width: 0;
		padding-bottom: 18%; /* 32:18, i.e. 16:9 */
		margin-bottom: 2%; /* (100-32*3)/2 */
	}

	.location {
		position: absolute;
		bottom: 5px;
		left: 5px;
		color: white;
		font-family: "IBM Plex Mono", monospace;
		font-size: 0.85rem;
		font-weight: 800;
		font-style: italic;
		text-shadow: 1px 1px 2px black;
	}

	.info {
		color: white;
		text-align: center;
		vertical-align: center;
		width: 1.25rem;
		height: 1.25rem;
		font-family: "IBM Plex Mono", monospace;
		font-size: 1rem;
		font-weight: 800;
		background-color: #e76f51;
		border-radius: 50%;
		display: inline-block;
		cursor: pointer;
	}

	h3 {
		font-family: "Chivo", sans-serif;
		font-size: 2rem;
		text-align: center;
		padding-bottom: 5vh;
	}

	h4 {
		padding: 0;
		margin: 0;
		text-align: left;
		font-family: "Chivo", sans-serif;
		font-size: 1.15rem;
	}

	p {
		padding: 0;
		margin: 0;
		text-align: left;
		font-family: "IBM Plex Mono", monospace;
		font-size: 0.85rem;
		font-weight: 400;
		text-transform: uppercase;
		padding-bottom: 5px;
	}
</style>
