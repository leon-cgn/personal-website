import { loadTranslations } from '$lib/functions/i18n/index';

/** @type {import('@sveltejs/kit').Load} */
export const load = async () => {
	const initialLocale = 'de'; //CV: Flip here

	await loadTranslations(initialLocale);

	return {};
};
