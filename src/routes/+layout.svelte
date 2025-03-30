<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { LayoutLoad, LayoutData } from './$types';

	export let data: LayoutData;

	beforeNavigate(() => console.log('Root beforeNavigate'));
	function goToLastRoute() {
		window.history.back();
	}
	onMount(() => {
		console.log('Mounted on:  /');
	});
	console.log('Data seen in root +layout.svelte: ', data.now_root);
</script>

<div class="box">
	<nav>
		<a href="/report/type/line">Goto line</a> |
		<a href="/report/type/bar">Goto Bar</a> |
		<a href="/login">Goto login</a> |
		<a href="#top" on:click|preventDefault={goToLastRoute}>Back to last</a>
	</nav>
</div>

<div>
	<slot />
</div>

<style>
	:global(.box) {
		border: 1px solid #000;
		margin: 5px;
		padding: 10px;
		padding-left: 20px;
		padding-right: 20px;
		display: inline-block;
	}
	:global(p, div) {
		padding: 1px;
		margin: 1px;
	}
</style>
