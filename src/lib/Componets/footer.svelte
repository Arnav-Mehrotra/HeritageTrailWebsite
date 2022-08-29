<script>
	let FooterLinks = {
		data: ['Home', 'Objectives', 'History', 'Contact', 'Sponsors']
	};
	console.log(FooterLinks);

	// svelte:prefetch

	async function CheckCurrentURL(URL) {
		return false;
	}
</script>

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
                        class="text-TextPrimary"
                        >@heritagetrailNOTL
                    </a>
                </small>
            </div>
        </div>
    </section>
</footer>
