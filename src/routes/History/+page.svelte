<script>
	import * as Gallery from '$lib/Assets/HistoryGallery.json';
	let Images = Gallery.data;
	console.log(Images);

	async function CheckCurrentURL(URL) {
		return false;
	}
	let currSlide = 0;

	function ChangeSlide(slide) {
		currSlide = slide;
	}

	const clamp = (number, min, max) => Math.min(Math.max(number, min), max);

	function prev(e) {
		currSlide = clamp(--currSlide, 0, Images.length - 1);
	}

	function next(e) {
		currSlide = clamp(++currSlide, 0, Images.length - 1);
	}
	let id = 0;
</script>

<div class="text-TextPrimary">
	<div class="flex flex-row">
		<div class="basis-1/4" />
		<div class="basis-2/4 items-center">
			<h3 class="text-2xl font-semibold text-TextSeccondary my-2 border-b pb-2">
				History of the Trail
			</h3>
			<p class="tracking-wide leading-7 text-shadow">
				The Upper Canada Heritage Trail was established to follow the railroad corridor of the Erie
				& Ontario Railway linking Niagara-on-the-Lake, the First Capital of Upper Canada, with
				Niagara Falls and the Great Western Railway. When operations began in 1854 it was one of the
				first steam powered railroads in Canada West, the new name for Upper Canada. It was
				responsible for breathing life into the Town of Niagara following the years after the
				opening of the second Welland Canal by attracting tourism and commerce.
			</p>
			<p class="tracking-wide leading-7 text-shadow">
				Rail operations ceased in the mid-1950s, with the corridor being formally abandoned in 1969.
				For 50 years, the trail has been used by cyclists, equestrians, runners, walkers,
				cross-country skiers, and others. Many organizations enjoy the trail including: Upper Canada
				Equestrian Association (UCEA), Queenston Residents Association, St. Davids Ratepayers
				Association and the Niagara Bruce Trail Club.
			</p>
			<p class="tracking-wide leading-7 text-shadow">
				The Heritage Trail corridor provides a continuous connection from the southern terminus of
				the Niagara Escarpment with the federally-owned Niagara Commons. The UCEA became the major
				environmental steward in 1982, organizing annual rides and clean-ups. Other educational and
				environmental stewardship activities have included a major tree-planting activity by the Boy
				Scouts of Canada.
			</p>
			
			<div>
				{#each Images as image, id}
					{#if id == currSlide}
					<h3 class="text-2xl font-semibold text-TextSeccondary my-2 border-t pb-2">
						{image.name}
					</h3>
					<div>
						<img src={image.src} alt={image.alt} />
					</div>
					{/if}
				{/each}
				<div class="grid grid-cols-4 gap-4">
					<div class="justify-self-start"><button on:click={() => prev()}>Previous</button></div>
					<div></div>
					<div></div>
					<div class="justify-self-end"><button on:click={() => next()}>Next</button></div>
				</div>
			</div>
		</div>
		<div class="basis-1/4" />
	</div>
</div>
