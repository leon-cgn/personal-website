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

<section class="card bg-base-100 shadow-xl">
	<figure>
		<img src={bgImg} alt="Shoes" />
	</figure>
	<div class="card-body">
		<div class="avatar -mt-20 max-w-max p-1">
			<div class="w-24 rounded-lg ring ring-white ring-offset-2 ring-offset-base-100">
				<img src={avatarImg} />
			</div>
		</div>
		<h2 class="card-title">Leon Schirmer</h2>
		<p>{$t('common.cta.job')}</p>
		<div class="card-actions mt-2 justify-end sm:mt-auto">
			<a
				aria-label="Github"
				target="_blank"
				href="https://github.com/leon-cgn"
				rel="noopener, noreferrer"
				class="btn btn-square btn-ghost drawer-button normal-case"
			>
				<i class="bx bx-md bxl-github" />
			</a>
			<a
				aria-label="LinkedIn"
				target="_blank"
				href="https://www.linkedin.com/in/leon-schirmer"
				rel="noopener, noreferrer"
				class="btn btn-square btn-ghost drawer-button normal-case"
			>
				<i class="bx bx-md bxl-linkedin-square" />
			</a>
			<a
				aria-label="Mail"
				target="_blank"
				href="mailto:hallo@leonschirmer.dev"
				rel="noopener, noreferrer"
				class="btn btn-square btn-ghost drawer-button normal-case"
			>
				<i class="bx bx-md bx-envelope" />
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
