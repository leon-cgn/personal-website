<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div
	data-is-pdf="false"
	id="layout-container"
	class="container mx-auto max-w-6xl pdf:max-w-xl pdf:pt-8"
>
	<Header />
	<slot />
	<Footer />
</div>
