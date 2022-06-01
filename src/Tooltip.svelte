<script>
	export let content;
	export let x;
	export let y;
</script>

<div class="tooltip" style="top: {y + 20}px; left: {x - 150}px;">
	{@html content}
</div>

<style>
	.tooltip {
		position: absolute;
		padding: 10px;
		border-radius: 3px;
		width: 300px;
		background-color: #f8f9fa;
		box-shadow: 1px 1px 5px #adb5bd;
		pointer-events: none;
		stroke: black;
	}
	:global(.tooltip p) {
		font-family: "HK Grotesk", sans-serif;
		margin: 0;
		padding: 5px;
		font-size: 1rem;
	}
</style>
