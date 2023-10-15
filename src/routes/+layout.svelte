<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="container mx-auto max-w-6xl">
	<Header />
	<slot />
</div>
