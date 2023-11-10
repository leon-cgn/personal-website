<script lang="ts">
	import avatarImg from '$lib/assets/avatar.jpeg';
	import bgImg from '$lib/assets/bg.jpeg';
	import cvDe from '$lib/assets/cv/Leon-Schirmer-CV-de.pdf';
	import cvEn from '$lib/assets/cv/Leon-Schirmer-CV-en.pdf';
	import { locale, t } from '$lib/functions/i18n/index';

	let isDownloadingCv = false;

	const downloadCv = async () => {
		isDownloadingCv = true;
		try {
			const downloadUrl = $locale === 'de' ? cvDe : cvEn;
			const response = await fetch(downloadUrl);
			const responseBlob = await response.blob();
			const link = document.createElement('a');
			link.href = window.URL.createObjectURL(responseBlob);
			link.download = `Leon-Schirmer-CV-${$locale}.pdf`;
			link.click();
			isDownloadingCv = false;
		} catch (error) {
			isDownloadingCv = false;
		}
	};
</script>

<section class="card bg-base-100 shadow-md">
	<figure>
		<img data-is-pdf="false" src={bgImg} alt="Bridge" class="pdf:hidden" />
	</figure>
	<div data-is-pdf="false" class="card-body pdf:flex-row">
		<div class="flex flex-col gap-1">
			<div data-is-pdf="false" class="avatar -mt-20 max-w-max p-1 pdf:mt-0">
				<div class="w-24 rounded-lg ring ring-white ring-offset-2 ring-offset-base-100">
					<img src={avatarImg} alt="avatar" />
				</div>
			</div>
			<h2 class="card-title">Leon Schirmer</h2>
			<p>{$t('common.cta.job')}</p>
		</div>
		<div data-is-pdf="false" class="mt-2 flex flex-col gap-4 pdf:ml-auto pdf:mt-auto sm:gap-2">
			<a
				aria-label="Mail"
				target="_blank"
				href={`mailto:${$t('common.cta.mail')}`}
				rel="noopener, noreferrer"
				class="inline-flex w-fit hover:text-primary"
			>
				<i class="bx bx-sm bx-envelope mr-2" />{$t('common.cta.mail')}
			</a>
			<a
				aria-label="Phone"
				target="_blank"
				href={`tel:${$t('common.cta.phoneNoFormat')}`}
				rel="noopener, noreferrer"
				class="inline-flex w-fit hover:text-primary"
			>
				<i class="bx bx-sm bx-phone mr-2" />{$t('common.cta.phone')}
			</a>
			<a
				aria-label="LinkedIn"
				target="_blank"
				href={$t('common.cta.linkedIn')}
				rel="noopener, noreferrer"
				class="inline-flex w-fit hover:text-primary"
			>
				<i class="bx bx-sm bxl-linkedin-square mr-2" />{$t('common.cta.linkedIn')}
			</a>
			<a
				aria-label="Github"
				target="_blank"
				href={$t('common.cta.github')}
				rel="noopener, noreferrer"
				class="inline-flex w-fit hover:text-primary"
			>
				<i class="bx bx-sm bxl-github mr-2" />{$t('common.cta.github')}
			</a>
		</div>
		<div data-is-pdf="false" class="card-actions mt-4 pdf:hidden sm:mt-6">
			<button on:click={downloadCv} id="download-cv-button" class="btn btn-primary w-full">
				{#if isDownloadingCv}
					<span class="loading loading-spinner" />
				{:else}
					{$t('common.cta.btn-download-cv')}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</div>
</section>
