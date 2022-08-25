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

	let FooterLinks = {
		data: ['Home', 'Objectives', 'History', 'Contact', 'Sponsors']
	};
	console.log(FooterLinks);

	// svelte:prefetch

	async function CheckCurrentURL(URL) {
		return false;
	}
</script>

<div class="text-TextPrimary">
	<header>
		<section>
			<nav class="py-4 bg-[#295936]">
				<div class="container mx-auto px-4">
					<div class="relative flex items-center justify-between">
						<div class="w-auto">
							<a class="inline-block" href="#">
								<img src="Images/logo.jpg" alt="" />
							</a>
						</div>
						<div
							class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block"
						>
							<ul class="flex items-center">
								{#each FooterLinks.data as Link}
									{#if CheckCurrentURL(Link) === true}
										<li class="font-heading mr-12 text-base">
											<a class="hover:text-white" href="/{Link}">{Link}</a>
										</li>
									{:else}
										<li class="font-heading mr-12 text-base">
											<a class="hover:text-white" href="/{Link}">{Link}</a>
										</li>
									{/if}
								{/each}
							</ul>
						</div>
						<div class="w-auto hidden lg:block">
							<a
								class="inline-block py-4 px-8 font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600 border border-green-500 hover:border-green-600 rounded-sm transition duration-200"
								href="#">Contact</a
							>
						</div>
						<div class="w-auto lg:hidden">
							<a
								class="navbar-burger inline-flex w-14 h-14 justify-center items-center bg-gray-500 hover:bg-gray-600 rounded-full"
								href="#"
							>
								<svg
									width="20"
									height="10"
									viewBox="0 0 20 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M19 9H1M19 1H1"
										stroke="white"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</nav>
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
										<h4 class="text-lg font-heading text-white mb-2">
											Infrastructure Improvements
										</h4>
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
				<nav class="relative pt-7 pb-8 bg-white h-full overflow-y-auto">
					<div class="flex flex-col px-6 h-full">
						<a class="inline-block ml-4 mb-7" href="#">
							<img src="acros-assets/logo/logo-acros-black.svg" alt="" />
						</a>
						<ul class="w-full mb-auto pb-16">
							<li>
								<a
									class="font-heading block text-base font-medium py-4 px-6 hover:bg-green-50 rounded-sm"
									href="#">Home</a
								>
							</li>
							<li>
								<a
									class="font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm"
									href="#">About</a
								>
							</li>
							<li>
								<a
									class="font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm"
									href="#">Company</a
								>
							</li>
							<li>
								<a
									class="font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm"
									href="#">Services</a
								>
							</li>
							<li>
								<a
									class="font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm"
									href="#">Testimonials</a
								>
							</li>
							<li>
								<a
									class="font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm"
									href="#">Contact</a
								>
							</li>
						</ul>
						<div class="w-full">
							<a
								class="block w-full py-4 px-4 mb-4 text-center font-heading font-medium text-base hover:text-green-500 border border-gray-900 hover:border-green-500 rounded-sm transition duration-200"
								href="#">Log in</a
							><a
								class="block w-full py-4 px-4 mb-8 text-center font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600 border border-green-500 hover:border-green-600 rounded-sm transition duration-200"
								href="#">Sign up</a
							>
							<p class="pl-2 text-sm">2022 :copyright: NOTL</p>
						</div>
					</div>
				</nav>
			</div>
		</section>
	</header>
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
								<div>
									<label for="email" class="font-semibold underline">Email</label>
									<br />
									<input
										type="email"
										name="email"
										required
										class="border-2 border-green-900 rounded text-black h-10 font-semibold"
										bind:value={email}
									/>
								</div>
								<div>
									<label for="phone" class="font-semibold underline">Phone Number</label>
									<br />
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
							<button type="submit" class="px-4 py-2 bg-blue-300 text-black rounded m-2"
								>Submit</button
							>
						</form>
					</div>
				</div>
				<div class="basis-1/4" />
			</div>
		</div>
	</main>
	<footer>
		<section class="py-14 bg-BackgroundColor">
			<div class="container px-4 mx-auto">
				<div class="flex flex-wrap items-center justify-between -mx-4 pb-12">
					<div class="w-full lg:w-auto px-4 md:mb-8 lg:mb-8">
						<a class="inline-block" href="/">
							<img src="/Images/logo.jpg" alt="" />
						</a>
					</div>
					<div class="w-full lg:w-auto px-4">
						<ul class="sm:flex flex-wrap items-center -mb-2">
							{#each FooterLinks.data as Link}
								{#if CheckCurrentURL(Link) === true}
									<li class="mb-2 sm:mr-6 lg:mr-16">
										<a class="font-heading text-white hover:text-gray-100" href="/{Link}">{Link}</a>
									</li>
								{:else}
									<li class="mb-2 sm:mr-6 lg:mr-16 group  hover:my-5 ease-in-out duration-75">
										<a
											class="font-heading text-white hover:text-gray-100  border-b border-DarkHighlight  group-hover:border-b-2 rounded p-[.25em] "
											href="/{Link}">{Link}</a
										>
									</li>
								{/if}
							{/each}
						</ul>
					</div>
				</div>
				<div class="flex flex-wrap items-center justify-between pt-5 border-t border-Highlight">
					<div class="flex flex-wrap items-center -mb-2">
						<a
							class="flex items-center justify-center w-12 h-12 mb-2 mr-2 rounded-full bg-[#1877f2] hover:bg-[#1877f280]"
							href="https://www.facebook.com/heritagetrailNOTL/"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="white"
								stroke="white"
								stroke-width="0.75"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-facebook"
								><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg
							>
						</a>
					</div>
					<small class="grid">
						<span class="mt-6 sm:mt-0 text-gray-300">2022 © Niagara-On-The-Lake Heritage Trail</span
						>
						<a
							href="https://www.facebook.com/heritagetrailNOTL/ "
							target="_blank"
							rel="noopener noreferrer"
							>@heritagetrailNOTL
						</a>
					</small>
				</div>
			</div>
		</section>
	</footer>
</div>

<style>
	body {
		margin-left: 15%;
		margin-right: 15%;
		line-height: 1.5;
		font-size: large;
		font-family: Calibri;
	}

	header {
		text-align: center;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
			sans-serif;
	}

	nav {
		text-align: center;
		font-size: x-large;
	}

	nav a {
		text-decoration: none;
		transition: 0.5s;
	}

	nav a:visited,
	nav a:active {
		color: black;
	}

	nav a:hover {
		transition: 0.5s;
		color: chartreuse;
	}

	hr {
		border-top: 2px solid black;
		width: 100%;
	}
</style>
