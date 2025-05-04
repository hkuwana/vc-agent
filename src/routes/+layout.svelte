<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/nav.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Features from '$lib/components/features.svelte';
	import HowItWorks from '$lib/components/how-it-works.svelte';
	import Contact from '$lib/components/contact.svelte';

	let { children } = $props();
</script>

<div class="min-h-screen">
	<Nav />
	<main>
		<Hero />
		<HowItWorks />
		<Features />
		<Contact />
		{@render children()}
	</main>
</div>
