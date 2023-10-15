<script>
	import { t } from '$lib/functions/i18n/index';
</script>

<section class="card col-span-2 bg-base-100 shadow-xl">
	<div class="card-body">
		<h2 class="card-title">{$t('common.about.label')}</h2>
		<div class="flex flex-col gap-2 sm:gap-4">
			<p>{@html $t('common.about.text')}</p>
		</div>
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
	</div>
</section>
