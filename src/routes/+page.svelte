<script lang="ts">
	import Nav from '$lib/components/nav.svelte';
	import Hero from '$lib/components/hero.svelte';
	import HowItWorks from '$lib/components/how-it-works.svelte';
	import Features from '$lib/components/features.svelte';
	import Contact from '$lib/components/contact.svelte';
	import Footer from '$lib/components/footers.svelte';
</script>

<div class="bg-background text-foreground flex min-h-dvh flex-col">
	<Nav />
	<main>
		<Hero />
		<HowItWorks />
		<Features />
		<Contact />
	</main>
	<Footer />
</div>
