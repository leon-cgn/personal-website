import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
		plugin(({ addVariant }) => {
			addVariant('pdf', '&[data-is-pdf="true"]');
		})
	],
	daisyui: {
		themes: ['autumn', 'business']
	}
};
