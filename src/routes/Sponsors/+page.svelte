<script>

import { Swiper, SwiperSlide } from "swiper/svelte";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";


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
	<Swiper navigation={true} modules={[Navigation]} class="mySwiper">
		<SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide
		><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide
		><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide
		><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide
		><SwiperSlide>Slide 9</SwiperSlide>
	  </Swiper>
	<div class="flex flex-row">
		<div class="basis-1/4" />
		<div class="basis-2/4 items-center">
			<h3 class="text-xl font-semibold">
				A huge thank you to everyone who sponsors the Heritage Trail!
			</h3>
		


			<a href="Images/Trail Plaque.pdf" target="_blank">
				<img
					alt="Plaque with all the names of individuals who sposored the heritage trail"
					src="Images/Trail Plaque.jpg"
					width="100%"
				/>
			</a>
			<img alt="Logo for Wise Guys Charity Fund" src="Images/WiseGuysCF.png" width="75%" />
			<img
				alt="Logos for Canopy Growth Corporation and Canadian National Railway"
				src="Images/Canopy Growth-CN.jpg"
				width="75%"
			/>
			<img
				alt="Logos for NOTL Horticulture, Zoom Leisure Bikes, St. Catharines Equestrian Club, and the NOTL Rotary Club"
				src="Images/Hort-Rotary-StCathEques-Zoom.jpg"
				width="75%"
			/>
			<img
				alt="Logos for NOTL realty, NOTL Museum, Grape Escape Wine Tours, Richard JW Andrews Law, Upper Canada Mechanical Heating and Air Conditioning, and United Way Greater Toronto"
				src="Images/NOTLReal-Museum-Grape-Andrews-UpperCan-UnitedWay.jpg"
				width="75%"
			/>
			<img
				alt="Logos for Bosley Real Estate, Gatta Homes, Oban Inn, Simpson's Pharmacy, Stone Road Dental, Attoe Foundation, Upper Canada Equestrian Association, NOTL Golf Club, and Greaves"
				src="Images/Bos-Oban-Gatta-Simpson-StoneRd-Attoe-UCEqu-GolfC-Greaves.jpg"
				width="75%"
			/>
		</div>
		<div class="basis-1/4" />

	</div>
</div>
