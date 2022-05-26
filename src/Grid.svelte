<script>
	/* imports */
	import { onMount } from "svelte";
	export let imgs = [];
</script>

<div class="container">
	{#each imgs as img}
		<div><p>img</p></div>
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-gap: 0px;
	}
</style>
