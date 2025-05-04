<script lang="ts">
	import Nav from '$lib/components/nav.svelte';
	import Hero from '$lib/components/hero.svelte';
	import HowItWorks from '$lib/components/how-it-works.svelte';
	import Features from '$lib/components/features.svelte';
	import Contact from '$lib/components/contact.svelte';
	import Footer from '$lib/components/footers.svelte';
</script>

<svelte:head>
	<title>FlyByrd | Automate Your VC Deal Flow Analysis</title>
	<meta
		name="description"
		content="Automate VC deal flow analysis with an AI-powered assistant that helps VCs analyze startup deals, screen founders, and streamline the investment process."
	/>
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="FlyByrd | Automate Your VC Deal Flow Analysis" />
	<meta
		property="og:description"
		content="Automate VC deal flow analysis with an AI-powered assistant that helps VCs analyze startup deals, screen founders, and streamline the investment process."
	/>
	<meta property="og:site_name" content="FlyByrd" />
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="FlyByrd | Automate Your VC Deal Flow Analysis" />
	<meta
		name="twitter:description"
		content="Automate VC deal flow analysis with an AI-powered assistant that helps VCs analyze startup deals, screen founders, and streamline the investment process."
	/>
	<!-- Additional SEO -->
	<meta
		name="keywords"
		content="VC deal flow analysis, AI startup screening, investment process automation, VC analytics, founder screening, AI-powered VC assistant"
	/>
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://flybyrd.io" />
</svelte:head>

<div class="bg-background text-foreground flex min-h-dvh flex-col">
	<Nav />

	<Hero />
	<HowItWorks />
	<Features />
	<Contact />

	<Footer />
</div>
