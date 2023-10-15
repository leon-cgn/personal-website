import { loadTranslations } from '$lib/functions/i18n/index';

/** @type {import('@sveltejs/kit').Load} */
export const load = async () => {
	const initialLocale = 'de';

	await loadTranslations(initialLocale);

	return {};
};
