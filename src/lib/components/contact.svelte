<script lang="ts">
	import { MailIcon, SendIcon } from '@lucide/svelte';

	let name = '';
	let email = '';
	let message = '';
	let submitted = false;

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

<section id="contact" class="container py-20">
	<div class="mx-auto mb-10 max-w-3xl text-center">
		<h2 class="text-3xl font-bold sm:text-4xl">Get in Touch</h2>
		<p class="text-base-content/70 mt-4">
			Interested in learning more? Send us a message or email directly at
			<a href="mailto:hiro@trykaiwa.com" class="text-primary font-semibold">hiro@trykaiwa.com</a>
		</p>
	</div>

	<div class="mx-auto max-w-md">
		{#if submitted}
			<div class="alert alert-success">
				<MailIcon class="h-6 w-6" />
				<span>Thank you! Your message has been sent.</span>
			</div>
		{:else}
			<form on:submit|preventDefault={handleSubmit} class="card bg-base-100 shadow-xl">
				<div class="card-body">
					<div class="form-control w-full">
						<label for="name" class="label">
							<span class="label-text">Name</span>
						</label>
						<input
							type="text"
							id="name"
							bind:value={name}
							required
							class="input input-bordered w-full"
							placeholder="Your name"
						/>
					</div>

					<div class="form-control w-full">
						<label for="email" class="label">
							<span class="label-text">Email</span>
						</label>
						<input
							type="email"
							id="email"
							bind:value={email}
							required
							class="input input-bordered w-full"
							placeholder="Your email"
						/>
					</div>

					<div class="form-control w-full">
						<label for="message" class="label">
							<span class="label-text">Message</span>
						</label>
						<textarea
							id="message"
							bind:value={message}
							required
							class="textarea textarea-bordered h-32"
							placeholder="Your message"
						></textarea>
					</div>

					<div class="card-actions mt-4 justify-end">
						<button type="submit" class="btn btn-primary">
							Send Message
							<SendIcon class="ml-2 h-4 w-4" />
						</button>
					</div>
				</div>
			</form>
		{/if}
	</div>
</section>
