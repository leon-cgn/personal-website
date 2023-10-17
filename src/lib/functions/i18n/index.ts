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
		},
		{
			locale: 'de',
			key: 'imprint-privacy',
			loader: async () => (await import('./de/imprint-privacy.json')).default
		},
		{
			locale: 'en',
			key: 'imprint-privacy',
			loader: async () => (await import('./en/imprint-privacy.json')).default
		}
	]
};
export const { t, loading, locales, locale, loadTranslations } = new i18n({
	...config,
	preprocess: 'preserveArrays'
});

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
