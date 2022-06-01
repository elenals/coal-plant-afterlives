<script>
	import Slider from "./Slider.svelte";
	import { tooltip } from "./tooltip";
</script>

<section>
	<!-- images must be in the "public" folder to be accessible here -->

	<div class="images">
		<div class="img">
			<h4>
				Mount Tom Station <span class="info" content="test" use:tooltip>i</span>
			</h4>
			<p>SOLAR PROJECT & BATTERY ENERGY STORAGE</p>
			<Slider
				beforeImg="images/mount-tom-2014.jpg"
				afterImg="images/mount-tom-2022.jpg"
			/>
			<div class="location">Holyoke, MA</div>
		</div>
		<div class="img">
			<h4>Coal Creek Station <span class="info">i</span></h4>
			<p>POTENTIAL WIND, CARBON CAPTURE</p>
			<Slider
				beforeImg="images/coal-creek-2021.jpg"
				afterImg="images/coal-creek-2022.jpg"
			/>
			<div class="location">Underwood, ND</div>
		</div>
		<div class="img">
			<h4>Brayton Point Power Plant <span class="info">i</span></h4>
			<p>OFFSHORE WIND MANUFACTURING</p>
			<Slider
				beforeImg="images/brayton-2018.jpg"
				afterImg="images/brayton-2022.jpg"
			/>
			<div class="location">Somerset, MA</div>
		</div>
		<div class="img">
			<h4>Sherburne County Generating Station <span class="info">i</span></h4>
			<p>SOLAR PROJECT</p>
			<Slider
				beforeImg="images/sherco-2012.jpg"
				afterImg="images/sherco-2022.jpg"
			/>
			<div class="location">Becker, MN</div>
		</div>
		<div class="img">
			<h4>Hayden Generating Station <span class="info">i</span></h4>
			<p>MOLTEN SALT ENERGY STORAGE</p>
			<Slider
				beforeImg="images/hayden-2021.jpg"
				afterImg="images/hayden-2022.jpg"
			/>
			<div class="location">Hayden, CO</div>
		</div>
		<div class="img">
			<h4>Beloit Coal Ash Landfill <span class="info">i</span></h4>
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
