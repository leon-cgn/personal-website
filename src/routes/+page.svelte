<script>
	import AboutCard from '$lib/components/AboutCard.svelte';
	import CtaCard from '$lib/components/CtaCard.svelte';
	import EducationsCard from '$lib/components/EducationsCard.svelte';
	import JobsCard from '$lib/components/JobsCard.svelte';
	import SkillsCard from '$lib/components/SkillsCard.svelte';
</script>

<svelte:head>
	<title>Leon Schirmer</title>
</svelte:head>

<main class="flex flex-col gap-4 px-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:p-0">
	<CtaCard />
	<AboutCard />
	<SkillsCard />
	<JobsCard />
	<EducationsCard />
</main>
