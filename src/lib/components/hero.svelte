<script lang="ts">
	import { ArrowRightIcon } from '@lucide/svelte';
</script>

<section id="hero" class="  flex min-h-[calc(100vh-4rem)] items-center py-20">
	<div class="mx-auto flex max-w-3xl flex-col items-center text-center">
		<h1 class="text-4xl leading-tight font-bold sm:text-5xl md:text-6xl">
			Automate Your VC Deal Flow Analysis
		</h1>
		<p class="text-base-content/70 mt-6 text-xl">
			An AI-powered assistant that helps VCs analyze startup deals, screen founders, and streamline
			the investment process.
		</p>
		<div class="mt-10 flex flex-col gap-4 sm:flex-row">
			<button
				class="btn btn-primary btn-lg"
				onclick={() => document.getElementById('contact')?.scrollIntoView()}
			>
				Get Started
				<ArrowRightIcon class="ml-2 h-5 w-5" />
			</button>
			<button
				class="btn btn-outline btn-lg"
				onclick={() => document.getElementById('how-it-works')?.scrollIntoView()}
			>
				Learn More
			</button>
		</div>
	</div>
</section>
