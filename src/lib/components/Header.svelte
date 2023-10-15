<script lang="ts">
	import { locale, locales } from '$lib/functions/i18n/index';

	const changeLang = (newLang: string) => {
		document.documentElement.setAttribute('lang', newLang);
		locale.set(newLang);
	};
</script>

<header class="navbar bg-base-100">
	<div class="ml-auto">
		{#each $locales as value}
			<button
				on:click={() => changeLang(value)}
				data-selected={value === $locale}
				class="btn btn-square btn-ghost btn-sm data-[selected=false]:opacity-50 data-[selected=true]:opacity-100"
			>
				<span class={`fi fi-${value === 'en' ? 'gb' : value}`} />
			</button>
		{/each}
	</div>
</header>
