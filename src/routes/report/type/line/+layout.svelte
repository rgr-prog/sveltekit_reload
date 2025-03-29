<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	beforeNavigate(() => console.log('Line beforeNavigate'));
	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<p>Layout do /report/type/line {data.query_params.seed}</p>
<slot />
