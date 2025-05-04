<script lang="ts">
	import { BookOpenIcon, UserCheckIcon, MailIcon, ShieldCheckIcon } from '@lucide/svelte';

	const steps = [
		{
			icon: BookOpenIcon,
			title: 'Data Collection',
			description:
				'Our agent analyzes VC partner blogs, talks, and investment criteria to understand their preferences.',
			detail:
				'We carefully analyze past investments, published thought leadership, and public statements to build a comprehensive understanding of what each VC partner looks for in potential investments.'
		},
		{
			icon: UserCheckIcon,
			title: 'Profile Creation',
			description:
				'Creates detailed profiles of investment preferences and qualifications with personalized onboarding.',
			detail:
				'Each VC profile is meticulously constructed to capture investment theses, sector focuses, and deal stage preferences. This allows our system to accurately match deals to your specific interests.'
		},
		{
			icon: MailIcon,
			title: 'Email Integration',
			description:
				'Sets up a tailored endpoint for forwarding potential deals directly from personal emails.',
			detail:
				'Our seamless email integration allows you to simply forward potential deals to your personalized address. No more copying and pasting or manual data entry - the system automatically extracts relevant information.'
		},
		{
			icon: ShieldCheckIcon,
			title: 'Deal Analysis',
			description:
				'Thoroughly analyzes founder backgrounds, company info, and identifies potential red flags.',
			detail:
				'Our AI performs comprehensive due diligence on each opportunity, examining team credentials, market positioning, financial metrics, and potential risks. This provides you with actionable insights in minutes instead of hours.'
		}
	];
</script>

<section
	id="how-it-works"
	class="bg-base-200 flex min-h-screen w-full flex-col items-center justify-center py-16"
>
	<div class="container mx-auto px-4">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="mb-4 text-4xl font-bold">How It Works</h2>
			<div class="divider mx-auto max-w-xs"></div>
			<p class="text-base-content/70 mt-4 text-lg">
				Our intelligent agent streamlines your VC deal flow analysis in four simple steps
			</p>
		</div>

		<div class="mx-auto max-w-6xl">
			<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
				{#each steps as step, i}
					<li>
						{#if i > 0}
							<hr class="bg-primary/30" />
						{/if}
						<div class="timeline-middle">
							<div class="bg-primary/10 border-primary/20 rounded-full border p-3 shadow-md">
								<svelte:component this={step.icon} class="text-primary h-5 w-5" />
							</div>
						</div>

						{#if i % 2 === 0}
							<div class="timeline-start mb-10 md:text-end">
								<div class="text-primary text-lg font-bold">{step.title}</div>
								<p class="text-base-content/80 font-medium">{step.description}</p>
								<p class="text-base-content/70 mt-2">{step.detail}</p>
							</div>
						{:else}
							<div class="timeline-end md:mb-10">
								<div class="text-primary text-lg font-bold">{step.title}</div>
								<p class="text-base-content/80 font-medium">{step.description}</p>
								<p class="text-base-content/70 mt-2">{step.detail}</p>
							</div>
						{/if}

						{#if i < steps.length - 1}
							<hr class="bg-primary/30" />
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
