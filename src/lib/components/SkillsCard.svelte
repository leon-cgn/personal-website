<script>
	import { t } from '$lib/functions/i18n/index';
	const skills = [
		'TypeScript',
		'React',
		'Next.js',
		'Svelte',
		'TailwindCSS',
		'Material UI',
		'NestJS',
		'BullMQ',
		'Node.js',
		'Flutter',
		'Firebase',
		'PostgreSQL',
		'WordPress',
		'Gitlab CI/ CD'
	];
</script>

<section
	data-is-pdf="false"
	class="card col-span-1 h-fit bg-base-100 shadow-md pdf:card-bordered pdf:shadow-none"
>
	<div class="card-body">
		<h2 class="card-title">{$t('common.skills.label')}</h2>
		<div class="flex flex-wrap gap-2">
			{#each skills as skill}
				<div class="badge badge-primary badge-outline">{skill}</div>
			{/each}
		</div>
	</div>
</section>
