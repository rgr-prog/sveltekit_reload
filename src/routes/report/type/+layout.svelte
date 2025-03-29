<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	beforeNavigate(() => console.log('T beforeNavigate'));
	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<p>Layout of /report/type {data.query_params.seed}</p>
<slot />
