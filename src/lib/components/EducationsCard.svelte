<script lang="ts">
	import hbrsLogo from '$lib/assets/education-logos/hbrs.png';
	import iwLgo from '$lib/assets/education-logos/iw.jpg';
	import { t } from '$lib/functions/i18n/index';
	const logos = {
		iw: iwLgo,
		hbrs: hbrsLogo
	};
	const educations = ['iw', 'hbrs'] as const;
</script>

<section
	data-is-pdf="false"
	class="card col-span-1 bg-base-100 shadow-md pdf:card-bordered pdf:shadow-none"
>
	<div class="card-body">
		<h2 class="card-title">{$t('common.educations.label')}</h2>
		<div class="flex flex-wrap divide-y">
			{#each educations as education}
				<div class="flex w-full flex-col gap-6 py-6 sm:flex-row">
					<div class="avatar">
						<div class="h-12 w-24 rounded-xl ring-2 ring-white">
							<img src={logos[education]} alt="job-logo" />
						</div>
					</div>
					<div class="flex w-full flex-col">
						<h3>{@html $t(`common.educations.${education}.label`)}</h3>
						<div class="flex flex-col opacity-50">
							<span>
								<i class="bx bx-briefcase" />
								{$t(`common.educations.${education}.university`)}
							</span>
							<span>
								<i class="bx bx-calendar-week" />
								{$t(`common.educations.${education}.dateFromTo`)}
							</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
