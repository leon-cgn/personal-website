<script>
	import { t } from '$lib/functions/i18n/index';
</script>

<section class="card col-span-2 bg-base-100 shadow-md">
	<div class="card-body">
		<h2 class="card-title">{$t('common.about.label')}<span id="waving-emoji">👋</span></h2>
		<div class="flex flex-col gap-2 sm:gap-4">
			<p>{@html $t('common.about.text')}</p>
		</div>
	</div>
</section>
