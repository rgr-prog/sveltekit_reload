<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	beforeNavigate(() => console.log('Line beforeNavigate'));
	import type { LayoutData } from './$types';
	export let data: LayoutData;
	onMount(() => {
		console.log('Mounted on:  /report/type/line');
	});
</script>

<div class="box">
	<p>- Layout of /report/type/line {data.query_params.seed}</p>
</div>
<div>
	<slot />
</div>
