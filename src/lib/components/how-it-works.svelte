<script lang="ts">
	import { BookOpenIcon, UserCheckIcon, MailIcon, ShieldCheckIcon } from '@lucide/svelte';

	const steps = [
		{
			icon: BookOpenIcon,
			title: 'Data Collection',
			description:
				'Our agent analyzes VC partner blogs, talks, and investment criteria to understand their preferences.'
		},
		{
			icon: UserCheckIcon,
			title: 'Profile Creation',
			description:
				'Creates detailed profiles of investment preferences and qualifications with personalized onboarding.'
		},
		{
			icon: MailIcon,
			title: 'Email Integration',
			description:
				'Sets up a tailored endpoint for forwarding potential deals directly from personal emails.'
		},
		{
			icon: ShieldCheckIcon,
			title: 'Deal Analysis',
			description:
				'Thoroughly analyzes founder backgrounds, company info, and identifies potential red flags.'
		}
	];
</script>

<section id="how-it-works" class="container py-20">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="text-3xl font-bold sm:text-4xl">How It Works</h2>
		<p class="text-base-content/70 mt-4">
			Our intelligent agent streamlines your VC deal flow analysis in four simple steps
		</p>
	</div>

	<div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
		{#each steps as step, i}
			<div class="card bg-base-100 shadow-xl">
				<div class="card-body flex flex-col items-center p-6 text-center">
					<div class="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
						<svelte:component this={step.icon} class="text-primary h-6 w-6" />
					</div>
					<h3 class="card-title mt-4">{step.title}</h3>
					<p class="text-base-content/70 mt-2 text-sm">{step.description}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
