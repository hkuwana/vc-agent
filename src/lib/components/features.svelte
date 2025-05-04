<script lang="ts">
	import { BrainIcon, ClockIcon, Funnel, ShieldIcon } from '@lucide/svelte';

	const features = [
		{
			icon: BrainIcon,
			title: 'AI-Powered Analysis',
			description: 'Advanced machine learning algorithms analyze startup potential and market fit.'
		},
		{
			icon: ClockIcon,
			title: 'Time Saving',
			description: 'Reduce analysis time from hours to minutes with automated deal screening.'
		},
		{
			icon: Funnel,
			title: 'Smart Filtering',
			description: 'Automatically identify deals that match your investment criteria.'
		},
		{
			icon: ShieldIcon,
			title: 'Risk Detection',
			description: 'Early identification of potential red flags and investment risks.'
		}
	];
</script>

<section id="features" class="bg-base-200 py-20">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="text-3xl font-bold sm:text-4xl">Key Features</h2>
		<p class="text-base-content/70 mt-4">
			Powerful tools to enhance your investment decision-making process
		</p>
	</div>

	<div class="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{#each features as feature}
			<div
				class="group card bg-base-100 border-base-200 transform border shadow transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
			>
				<div class="card-body flex flex-col items-center space-y-4 p-6 text-center">
					<div
						class="bg-primary/10 group-hover:bg-primary/20 rounded-full p-4 transition-colors duration-300"
					>
						<svelte:component this={feature.icon} class="text-primary h-8 w-8" />
					</div>
					<div>
						<h3
							class="card-title group-hover:text-primary text-lg font-semibold transition-colors duration-300"
						>
							{feature.title}
						</h3>
						<p class="text-base-content/60">{feature.description}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
