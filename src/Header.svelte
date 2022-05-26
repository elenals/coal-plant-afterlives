<script>
	import Grid from "./Grid.svelte";
	import { onMount } from "svelte";

	let imgs = [
		{
			name: "a",
			src: "https://via.placeholder.com/180x200/1",
		},
		{
			name: "a",
			src: "https://via.placeholder.com/180x200/1",
		},
		{
			name: "a",
			src: "https://via.placeholder.com/180x200/1",
		},
		{
			name: "a",
			src: "https://via.placeholder.com/180x200/1",
		},
		{
			name: "a",
			src: "https://via.placeholder.com/180x200/1",
		},
		{
			name: "a",
			src: "https://via.placeholder.com/180x200/1",
		},
		{
			name: "a",
			src: "https://via.placeholder.com/180x200/1",
		},
		{
			name: "a",
			src: "https://via.placeholder.com/180x200/1",
		},
		{
			name: "a",
			src: "https://via.placeholder.com/180x200/1",
		},
		{
			name: "a",
			src: "https://via.placeholder.com/180x200/1",
		},
	];

	onMount(async () => {
		console.log("test");
	});
</script>

<Grid {imgs} />

<style>
</style>
