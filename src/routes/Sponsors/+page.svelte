<script>
	/* 
   
   Footer Code Placement
   
   */
	let Sponsors = [
		{
			name: 'Trail Plaque',
			src: 'Images/Trail Plaque.jpg',
			alt: 'Plaque with all the names of individuals who sposored the heritage trail'
		},
		{
			name: 'Wise Guys Charity Fund',
			src: 'Images/WiseGuysCF.png',
			alt: 'Logo for Wise Guys Charity Fund'
		},
		{
			name: 'Canopy Growth and Canadian National Railway',
			alt: 'Logos for Canopy Growth Corporation and Canadian National Railway',
			src: 'Images/Canopy Growth-CN.jpg'
		},
		{
			name: 'NOTL Horticulture, Zoom Leisure Bikes, St. Catharines Equestrian Club, and the NOTL Rotary Club',
			alt: 'Logos for NOTL Horticulture, Zoom Leisure Bikes, St. Catharines Equestrian Club, and the NOTL Rotary Club',
			src: 'Images/Hort-Rotary-StCathEques-Zoom.jpg'
		},
		{
			name: 'NOTL realty, NOTL Museum, Grape Escape Wine Tours, Richard JW Andrews Law, Upper Canada Mechanical Heating and Air Conditioning, and United Way Greater Toronto',
			alt: 'Logos for NOTL realty, NOTL Museum, Grape Escape Wine Tours, Richard JW Andrews Law, Upper Canada Mechanical Heating and Air Conditioning, and United Way Greater Toronto',
			src: 'Images/NOTLReal-Museum-Grape-Andrews-UpperCan-UnitedWay.jpg'
		},
		{
			name: "Bosley Real Estate, Gatta Homes, Oban Inn, Simpson's Pharmacy, Stone Road Dental, Attoe Foundation, Upper Canada Equestrian Association, NOTL Golf Club, and Greaves",
			alt: "Logos for Bosley Real Estate, Gatta Homes, Oban Inn, Simpson's Pharmacy, Stone Road Dental, Attoe Foundation, Upper Canada Equestrian Association, NOTL Golf Club, and Greaves",
			src: 'Images/Bos-Oban-Gatta-Simpson-StoneRd-Attoe-UCEqu-GolfC-Greaves.jpg'
		}
	];

	// svelte:prefetch

	async function CheckCurrentURL(URL) {
		return false;
	}
	let currSlide = 0;

	function ChangeSlide(slide) {
		currSlide = slide;
	}

	const clamp = (number, min, max) => Math.min(Math.max(number, min), max);

	function prev(e) {
		currSlide = clamp(--currSlide, 0, Sponsors.length - 1);
	}

	function next(e) {
		currSlide = clamp(++currSlide, 0, Sponsors.length - 1);
	}
	let id = 0;
</script>

<div class="text-TextPrimary">
	<div class="flex flex-row">
		<div class="basis-1/4" />
		<div class="basis-2/4 items-center">
			<h3 class="text-xl font-semibold mt-3">
				A huge thank you to everyone who sponsors the Heritage Trail!
			</h3>
			<div class="w-full">
				{#each Sponsors as sponsor, id}
					{#if id == currSlide}
						{#if id == 0}
							<h3 class="my-2">{sponsor.name}</h3>
							<a href="Images/Trail Plaque.pdf" target="_blank">
								<img src={sponsor.src} alt={sponsor.alt} class="w-full" />
							</a>
						{:else}
							<h3 class="my-2">{sponsor.name}</h3>
							<img src={sponsor.src} alt={sponsor.alt} />
						{/if}
					{/if}
				{/each}

				<div class="grid grid-cols-2 w-full mt-4">
					<div class="flex flex-start">
						<button
							on:click={() => prev()}
							class="bg-emerald-900 rounded-full border p-2 hover:p-3 duration-200"
						>
							<span>
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
										d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
									/>
								</svg>
							</span>
						</button>
					</div>

					<div class="flex flex-row-reverse">
						<button
							on:click={() => next()}
							class="bg-emerald-900 rounded-full border p-2 hover:p-3 duration-200"
						>
							<span>
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
										d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
									/>
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
