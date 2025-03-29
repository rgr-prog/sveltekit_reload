<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	beforeNavigate(() => console.log('Report beforeNavigate'));
	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<p>Layout of /report {data.query_params.seed}</p>
<slot />
