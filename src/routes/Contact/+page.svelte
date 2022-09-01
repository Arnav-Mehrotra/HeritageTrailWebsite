<script>
	const ACTIONURL = 'https://submit-form.com/echo';
	let message = '';
	let email = '';
	let phoneNumber = '';
	let submitting = false;

	async function Submit(message, email, phoneNumber) {
		console.log('Function Start');

		try {
			submitting = true;
			await fetch(ACTIONURL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify({
					message,
					email,
					phoneNumber
				})
			});
			alert('Submitted');
		} finally {
			submitting = false;
			console.log('Function End');
			alert('Completed');
		}
	}

	/* 

Footer Code Placement

*/

	// svelte:prefetch

	async function CheckCurrentURL(URL) {
		return false;
	}
</script>

<div class="text-TextPrimary">
	<section>
		<div
			class="pt-24 sm:pt-34 bg-cover h-full"
			style="background-image: url('Images/megan-lee-sHq15rZgo1g-unsplash.jpg');"
		>
			<div class="container px-4 mx-auto">
				<div class="flex flex-wrap items-center -mx-4 pb-24 sm:pb-34 pt-[25%]" />
			</div>
			<div class="relative py-12">
				<div
					class="absolute top-0 left-0 w-full h-full backdrop-blur backdrop-filter bg-gray-900 bg-opacity-50"
				/>
				<div class="relative container px-4 mx-auto">
					<div class="flex flex-wrap -mx-4">
						<div class="w-full md:w-1/3 px-4 mb-6 md:mb-0">
							<div class="flex max-w-xxs sm:max-w-sm mx-auto">
								<div
									class="flex-shrink-0 flex items-center justify-center w-14 lg:w-16 h-14 lg:h-16 mr-4 lg:mr-8 rounded-md text-green-500 bg-gray-200 bg-opacity-10"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								</div>
								<div>
									<h4 class="text-lg font-heading text-white mb-2">Our Vision</h4>
									<p class="text-white">Raising the Heritage Trail to its former glory.</p>
								</div>
							</div>
						</div>
						<div class="w-full md:w-1/3 px-4 mb-6 md:mb-0">
							<div class="flex max-w-xxs sm:max-w-sm mx-auto">
								<div
									class="flex-shrink-0 flex items-center justify-center w-14 lg:w-16 h-14 lg:h-16 mr-4 lg:mr-8 rounded-md text-green-500 bg-gray-200 bg-opacity-10"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
										/>
									</svg>
								</div>
								<div>
									<h4 class="text-lg font-heading text-white mb-2">History</h4>
									<p class="text-white">Teaching the rich history of the Heritage.</p>
								</div>
							</div>
						</div>
						<div class="w-full md:w-1/3 px-4">
							<div class="flex max-w-xxs sm:max-w-sm mx-auto">
								<div
									class="flex-shrink-0 flex items-center justify-center w-14 lg:w-16 h-14 lg:h-16 mr-4 lg:mr-8 rounded-md text-green-500 bg-gray-200 bg-opacity-10"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
										/>
									</svg>
								</div>
								<div>
									<h4 class="text-lg font-heading text-white mb-2">Infrastructure Improvements</h4>
									<p class="text-white">Making sure the trail is accessible to all.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
			<div
				class="navbar-backdrop fixed inset-0 backdrop-blur-xl backdrop-filter bg-gray-900 bg-opacity-80"
			/>
		</div>
	</section>

	<hr />
	<main>
		<div>
			<div class="flex flex-row">
				<div class="basis-1/4" />
				<div class="basis-2/4 items-center">
					<div>
						<form
							on:submit|preventDefault={Submit}
							class="bg-white m-4 text-black rounded p-3"
							action="https://submit-form.com/echo"
						>
							<h3 class="text-xl font-semibold">Contact Us</h3>
							<p class="text-sm">
								If you are interested in learning how you can support the trail by fundraising,
								making a donation, and helping to raise awareness and use of the Trail, please fill
								in the form below.
							</p>
							<div class="grid grid-cols-2 gap-2">
								<div class="grid">
									<label for="email" class="font-semibold underline">Email</label>

									<input
										type="email"
										name="email"
										required
										class="border-2 border-green-900 rounded text-black h-10 font-semibold"
										bind:value={email}
									/>
								</div>
								<div class="grid">
									<label for="phone" class="font-semibold underline">Phone Number</label>

									<input
										type="tel"
										name="phone"
										required
										class="border-2 border-green-900 rounded text-black h-10 font-semibold"
										bind:value={phoneNumber}
									/>
								</div>
							</div>
							<label for="message" class="font-semibold underline">Message</label>
							<br />
							<textarea
								name="message"
								cols="5"
								rows="8"
								style="resize: none;"
								class="border-2 border-green-900 rounded text-black font-semibold w-full"
								bind:value={message}
							/>
							<br />
							<button type="submit" class="px-4 py-2 bg-blue-300 text-black rounded m-2 text-blue-900"
								>Submit</button
							>
						</form>
					</div>
				</div>
				<div class="basis-1/4" />
			</div>
		</div>
	</main>
</div>
