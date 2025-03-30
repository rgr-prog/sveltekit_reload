<script lang="ts">
	import { goto, invalidate, invalidateAll } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount, tick } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	$: if (data) {
		console.log('Line tracks data as:', JSON.stringify(data));
	}

	let currentUrl = page.url;
	let params = currentUrl.searchParams;
	updateQueryParams();

	onMount(() => {
		console.log(`Mounted on:  /report/type/line/+page.svelte ${currentUrl}`);
	});

	async function updateQueryParams() {
		const seed = Math.random().toString(36).substring(2, 8);
		params.set('seed', seed);

		params.set('ids', Date.now().toString());
		if (typeof window !== 'undefined') {
			await goto(`${currentUrl.pathname}?${params.toString()}`, {
				replaceState: true // não adiciona ao histórico do navegador
			});
		}
		tick();
		if (data?.query_params?.seed !== seed) {
			reload();
		}
	}
	async function reload() {
		if (typeof window !== 'undefined') {
			console.log('Reload is starting');
			await invalidate('app:layout_root');
			console.log('Reload called');
		}
	}
</script>

<div class="box">
	<p>- Page Line graph</p>
	<pre>
ID :{data?.query_params?.ids}
Seed:{data?.query_params?.seed}
</pre>

	<nav>
		<button on:click={() => updateQueryParams()}>Evaluate</button>
		<button on:click={() => reload()}>Invalidade</button>
	</nav>
</div>
