<script>
	import { goto } from '$app/navigation';
	import { t } from '$lib/functions/i18n/index';
</script>

<main class="flex flex-col gap-4 px-4">
	<div class="flex w-full">
		<button class="btn" on:click={() => goto('/')}>
			<i class="bx bx-arrow-back" />
			{$t('imprint-privacy.nav.buttonBack')}
		</button>
	</div>
	<h1>{$t('imprint-privacy.page.title')}</h1>
</main>
