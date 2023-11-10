<script lang="ts">
	import { t } from '$lib/functions/i18n/index';

	const currentYear = new Date().getFullYear();
</script>

<footer
	data-is-pdf="false"
	id="footer-imprint-privacy"
	class="mt-6 flex w-full justify-center p-4 pdf:hidden"
>
	<p class="inline-flex flex-col sm:flex-row">
		Leon Schirmer © {currentYear}<span class="hidden sm:block">&nbsp;-&nbsp;</span>
		<a class="link-hover link" href="/imprint-privacy">{$t('common.footer.imprintPrivacy')}</a>
	</p>
</footer>
