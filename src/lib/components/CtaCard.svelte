<script lang="ts">
	import avatarImg from '$lib/assets/avatar.jpeg';
	import bgImg from '$lib/assets/bg.jpeg';
	import { t } from '$lib/functions/i18n/index';
	let isDownloadingCv = false;

	// TODO Finish pdf export with pdf styling with data-is-pdf and server static files de/ en
	const exportToPdf = async () => {
		isDownloadingCv = true;
		try {
			const response = await fetch('/api/download-cv');
			const responseBlob = await response.blob();
			const link = document.createElement('a');
			link.href = window.URL.createObjectURL(responseBlob);
			link.download = `Leon-Schirmer-CV.pdf`;
			link.click();
			console.log(response);
			isDownloadingCv = false;
		} catch (error) {
			console.log(error);
			isDownloadingCv = false;
		}
	};
</script>

<section class="card bg-base-100 shadow-md">
	<figure>
		<img src={bgImg} alt="Bridge" />
	</figure>
	<div class="card-body">
		<div class="avatar -mt-20 max-w-max p-1">
			<div class="w-24 rounded-lg ring ring-white ring-offset-2 ring-offset-base-100">
				<img src={avatarImg} />
			</div>
		</div>
		<h2 class="card-title">Leon Schirmer</h2>
		<div class="flex flex-col gap-4 sm:gap-2">
			<p>{$t('common.cta.job')}</p>
			<a
				aria-label="Mail"
				target="_blank"
				href="mailto:hallo@leonschirmer.dev"
				rel="noopener, noreferrer"
				class="mt-2 inline-flex w-fit hover:text-primary"
			>
				<i class="bx bx-sm bx-envelope mr-2" />hallo@leonschirmer.dev
			</a>
			<a
				aria-label="Phone"
				target="_blank"
				href="tel:004915150527650"
				rel="noopener, noreferrer"
				class="inline-flex w-fit hover:text-primary"
			>
				<i class="bx bx-sm bx-phone mr-2" />0151-50527650
			</a>
			<a
				aria-label="LinkedIn"
				target="_blank"
				href="https://www.linkedin.com/in/leon-schirmer"
				rel="noopener, noreferrer"
				class="inline-flex w-fit hover:text-primary"
			>
				<i class="bx bx-sm bxl-linkedin-square mr-2" />https://www.linkedin.com/in/leon-schirmer
			</a>
			<a
				aria-label="Github"
				target="_blank"
				href="https://github.com/leon-cgn"
				rel="noopener, noreferrer"
				class="inline-flex w-fit hover:text-primary"
			>
				<i class="bx bx-sm bxl-github mr-2" />https://github.com/leon-cgn
			</a>
		</div>

		<!-- <div class="card-actions mt-4 sm:mt-6">
			<button on:click={exportToPdf} id="download-cv-button" class="btn btn-primary w-full">
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
		</div> -->
	</div>
</section>
