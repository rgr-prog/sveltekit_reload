<script lang="ts">
	import { goto } from '$app/navigation';

	function goToLastRoute() {
		window.history.back();
	}
</script>

<p>Login</p>
<button on:click={goToLastRoute}>Back to last route</button>
