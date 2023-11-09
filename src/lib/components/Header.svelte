<script lang="ts">
	import { locale as currentLocale, locales } from '$lib/functions/i18n/index';

	const changeLang = (newLang: string) => {
		document.documentElement.setAttribute('lang', newLang);
		currentLocale.set(newLang);
	};
</script>

<header id="header-lang-picker" class="navbar">
	<div class="ml-auto">
		{#each $locales as locale}
			<button
				id={`button-lang-${locale}`}
				on:click={() => changeLang(locale)}
				data-selected={locale === $currentLocale}
				class="btn btn-square btn-ghost btn-sm data-[selected=false]:opacity-50 data-[selected=true]:opacity-100"
			>
				<span class={`fi fi-${locale === 'en' ? 'gb' : locale}`} />
			</button>
		{/each}
	</div>
</header>
