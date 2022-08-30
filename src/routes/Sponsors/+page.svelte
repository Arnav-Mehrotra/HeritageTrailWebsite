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
	console.log(Sponsors);

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
			<h3 class="text-xl font-semibold">
				A huge thank you to everyone who sponsors the Heritage Trail!
			</h3>
			<div>
				{#each Sponsors as sponsor, id}
					{#if id == currSlide}
						{#if id == 0}
							<a href="Images/Trail Plaque.pdf" target="_blank">
								<h3>{sponsor.name}</h3>
								<img src={sponsor.src} alt={sponsor.alt} />
							</a>
						{:else}
							<h3>{sponsor.name}</h3>
							<img src={sponsor.src} alt={sponsor.alt} />
						{/if}
					{/if}
				{/each}
				<button on:click={() => prev()}>Previous</button>
				<button on:click={() => next()}>Next</button>
			</div>
		</div>
		<div class="basis-1/4" />
	</div>
</div>
