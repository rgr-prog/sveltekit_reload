<script lang="ts">
	import { beforeNavigate, invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	beforeNavigate(() => console.log('T beforeNavigate'));
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	onMount(() => {
		console.log('Mounted on:  /report/type');
	});
	async function reload() {
		if (typeof window !== 'undefined') {
			console.log('Reload is starting');
			await invalidate('app:layout_root');
			console.log('Reload called from line');
		}
	}
</script>

<div class="box">
	<p>
		- Layout of /report/type {data.query_params.seed}
		<button on:click={() => reload()}>Invalidade</button>
	</p>
</div>

<div>
	<slot />
</div>
