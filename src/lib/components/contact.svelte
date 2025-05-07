<script lang="ts">
	import { MailIcon, SendIcon } from '@lucide/svelte';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let submitted = $state(false);

	function handleSubmit() {
		// In a real implementation, you would send this data to a server
		console.log({ name, email, message });
		submitted = true;
		name = '';
		email = '';
		message = '';

		// Reset form state after 5 seconds
		setTimeout(() => {
			submitted = false;
		}, 5000);
	}
</script>

<section id="contact" class="  flex min-h-screen flex-col items-center justify-center">
	<div class="mx-auto mb-10 text-center">
		<h2 class="text-3xl font-bold sm:text-4xl">Get in Touch</h2>
		<p class="text-base-content/70 mt-4">
			Interested in learning more? Send us a message or email directly at
			<a href="mailto:hiro@trykaiwa.com" class="text-primary font-semibold">hiro@trykaiwa.com</a>
		</p>
	</div>

	<div class="mx-auto">
		{#if submitted}
			<div class="alert alert-success">
				<MailIcon class="h-6 w-6" />
				<span>Thank you! Your message has been sent.</span>
			</div>
		{:else}
			<div class="card-actions mt-4 justify-end">
				<button type="submit" class="btn btn-primary">
					Send Message
					<SendIcon class="ml-2 h-4 w-4" />
				</button>
			</div>
		{/if}
	</div>
</section>
