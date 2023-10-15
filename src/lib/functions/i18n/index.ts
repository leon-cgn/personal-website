import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
	loaders: [
		{
			locale: 'de',
			key: 'common',
			loader: async () => (await import('./de/common.json')).default
		},
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./en/common.json')).default
		}
	]
};
export const { t, loading, locales, locale, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
