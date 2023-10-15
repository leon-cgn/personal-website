<script>
	import { t } from '$lib/functions/i18n/index';
</script>

<section class="card bg-base-100 shadow-xl">
	<figure>
		<!-- TODO Put smithers mountains image into assets -->
		<img
			src="https://mediaim.expedia.com/destination/1/1ae1ef27568e65b6fd442a83c83f5aa4.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh"
			alt="Shoes"
		/>
	</figure>
	<div class="card-body">
		<div class="avatar -mt-20 max-w-max p-1">
			<div class="w-24 rounded-lg ring ring-white ring-offset-2 ring-offset-base-100">
				<!-- TODO Put linkedIn image into assets -->
				<img
					src="https://media.licdn.com/dms/image/C4E03AQF9BabzV5-zhg/profile-displayphoto-shrink_200_200/0/1614935848656?e=1702512000&v=beta&t=GlcJry6Fa-m8crvMkK3HXp6m84VrixqUgRVM70Bhlas"
				/>
			</div>
		</div>
		<h2 class="card-title">Leon Schirmer</h2>
		<p>{$t('common.cta.job')}</p>
		<div class="card-actions mt-4 sm:mt-6">
			<button class="btn btn-primary w-full"
				>{$t('common.cta.btn-download-cv')}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
					/>
				</svg>
			</button>
		</div>
	</div>
</section>
