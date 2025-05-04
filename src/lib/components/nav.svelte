<script lang="ts">
	import { MenuIcon, Sun, Moon } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let isScrolled = $state(false);
	let isMobileMenuOpen = $state(false);
	let theme = $state('light');

	// Update scroll state
	const handleScroll = () => {
		isScrolled = window.scrollY > 50;
	};

	// Theme toggle
	const toggleTheme = () => {
		theme = theme === 'light' ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	};

	onMount(() => {
		// Get saved theme from localStorage or use system preference
		const savedTheme = localStorage.getItem('theme');

		if (savedTheme) {
			theme = savedTheme;
		} else {
			// Check system preference
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			theme = prefersDark ? 'dark' : 'light';
		}

		document.documentElement.setAttribute('data-theme', theme);
	});
</script>

<svelte:window onscroll={handleScroll} />

<header
	class={{
		'fixed top-0 right-0 left-0 z-50 flex items-center border-b': true,
		'bg-base-100': !isScrolled,
		'bg-base-100/80 backdrop-blur-sm': isScrolled
	}}
>
	<nav class="container flex h-16 items-center justify-between">
		<a href="#hero" class="flex items-center gap-2">
			<span class="text-lg font-semibold">VC Analyst Agent</span>
		</a>

		<!-- Desktop Nav -->
		<div class="hidden items-center gap-6 md:flex">
			<a
				href="#how-it-works"
				class="text-base-content/70 hover:text-base-content text-sm font-medium">How it Works</a
			>
			<a href="#features" class="text-base-content/70 hover:text-base-content text-sm font-medium"
				>Features</a
			>
			<a href="#contact" class="text-base-content/70 hover:text-base-content text-sm font-medium"
				>Contact</a
			>
			<button class="btn btn-primary">Join Waitlist</button>
			<button class="btn btn-ghost btn-circle" onclick={toggleTheme}>
				{#if theme === 'light'}
					<Moon class="h-5 w-5" />
				{:else}
					<Sun class="h-5 w-5" />
				{/if}
			</button>
		</div>

		<!-- Mobile Menu Button -->
		<button
			class="btn btn-ghost btn-circle md:hidden"
			onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
		>
			<MenuIcon class="h-5 w-5" />
		</button>
	</nav>

	<!-- Mobile Menu -->
	{#if isMobileMenuOpen}
		<div class="bg-base-100 absolute top-16 right-0 left-0 border-b p-4 md:hidden">
			<nav class="flex flex-col gap-4">
				<a
					href="#how-it-works"
					class="text-base-content/70 hover:text-base-content text-sm font-medium">How it Works</a
				>
				<a href="#features" class="text-base-content/70 hover:text-base-content text-sm font-medium"
					>Features</a
				>
				<a href="#contact" class="text-base-content/70 hover:text-base-content text-sm font-medium"
					>Contact</a
				>
				<button class="btn btn-primary w-full">Join Waitlist</button>
				<button class="btn btn-ghost" onclick={toggleTheme}>
					{#if theme === 'light'}
						<Moon class="mr-2 h-5 w-5" /> Switch to Dark Mode
					{:else}
						<Sun class="mr-2 h-5 w-5" /> Switch to Light Mode
					{/if}
				</button>
			</nav>
		</div>
	{/if}
</header>
