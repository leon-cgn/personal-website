<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div
	id="layout-container"
	data-is-pdf="false"
	class="container mx-auto max-w-6xl data-[is-pdf=true]:opacity-50"
>
	<Header />
	<slot />
	<Footer />
</div>
