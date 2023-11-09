<script lang="ts">
	import csbLogo from '$lib/assets/project-logos/csb.jpg';
	import isdIpcLogo from '$lib/assets/project-logos/isd.png';
	import packiroLogo from '$lib/assets/project-logos/packiro.png';
	import wpLogo from '$lib/assets/project-logos/wp.png';
	import { t } from '$lib/functions/i18n/index';

	const logos = {
		ipc: isdIpcLogo,
		csb: csbLogo,
		packiro: packiroLogo,
		websites: wpLogo,
		isd: isdIpcLogo
	};

	// TODO Create obj here by iteration over jobs[] and get strings/ array of strings from t()
	const jobs = ['ipc', 'csb', 'packiro', 'websites', 'isd'] as const;
</script>

<section class="card col-span-2 row-span-3 bg-base-100 shadow-md">
	<div class="card-body">
		<h2 class="card-title">{$t('common.jobs.label')}</h2>
		<div class="flex flex-wrap divide-y">
			{#each jobs as job}
				<div class="flex w-full flex-col gap-4 py-6 sm:flex-row sm:gap-6">
					<div class="avatar">
						<div class="h-12 w-24 rounded-xl ring-2 ring-white">
							<img src={logos[job]} alt="job-logo" />
						</div>
					</div>
					<div class="flex w-full flex-col">
						<h3>{$t(`common.jobs.${job}.label`)}</h3>
						<div class="flex flex-col opacity-50 sm:flex-row">
							<span>
								<i class="bx bx-briefcase" />
								{$t(`common.jobs.${job}.company`)}
							</span>
							<span class="sm:ml-4">
								<i class="bx bx-map" />
								{$t(`common.jobs.${job}.location`)}
							</span>
							<span class="sm:ml-auto">
								<i class="bx bx-calendar-week" />
								{$t(`common.jobs.${job}.dateFromTo`)}
							</span>
						</div>
						<ul class="ml-4 mt-4 list-outside list-disc">
							{@html $t(`common.jobs.${job}.descriptionList`)}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
