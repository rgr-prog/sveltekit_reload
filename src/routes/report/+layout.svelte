<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	beforeNavigate(() => console.log('Report beforeNavigate'));
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	onMount(() => {
		console.log('Mounted on:  /report');
	});
</script>

<div class="box">
	<p>- Layout of /report {data.query_params.seed}</p>
</div>

<div>
	<slot />
</div>
