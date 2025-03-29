<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import type { LayoutLoad, LayoutData } from './$types';
	beforeNavigate(() => console.log('Raiz beforeNavigate'));

	export let data: LayoutData;

	console.log('Data seen in root +layout.svelte: ', data.now_root);
</script>

<p>Layout of / {data.query_params.seed}</p>
<slot />
