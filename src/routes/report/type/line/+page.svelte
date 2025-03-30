<script lang="ts">
	import { goto, invalidate, invalidateAll } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount, tick } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	$: if (data) {
		console.log('Agora o Line ve data:', JSON.stringify(data));
	}
	onMount(() => {});
	async function updateQueryParams() {
		const currentUrl = page.url;
		const params = currentUrl.searchParams;
		params.set('ids', Date.now().toString());
		const seed = Math.random().toString(36).substring(2, 8);
		params.set('seed', seed);
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
		await invalidate('app:layout_root');
		console.log('Reload');
	}
</script>

<p>Page Line graph</p>
<pre>
ID :{data?.query_params?.ids}
Seed:{data?.query_params?.seed}
</pre>

<ul>
	<li>
		<a href="/report/type/bar">Goto Bar</a>
	</li>
	<li>
		<a href="/login">Goto login</a>
	</li>

	<li>
		<button on:click={() => updateQueryParams()}>Evaluate</button>
	</li>
	<li>
		<button on:click={() => reload()}>Invalidade</button>
	</li>
</ul>
