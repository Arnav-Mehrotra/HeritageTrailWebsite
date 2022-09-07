
<script>
import { onMount } from "svelte";
import * as JSONLinks from '$lib/Assets/sitemap.json';
onMount(()=>{

// Burger menus
function initJS(){
   // open
   const burger = document.querySelectorAll('.navbar-burger');
   const menu = document.querySelectorAll('.navbar-menu');

   if (burger.length && menu.length) {
       for (var i = 0; i < burger.length; i++) {
           burger[i].addEventListener('click', function() {
               for (var j = 0; j < menu.length; j++) {
                   menu[j].classList.toggle('hidden');
               }
           });
       }
   }

   // close
   const close = document.querySelectorAll('.navbar-close');
   const backdrop = document.querySelectorAll('.navbar-backdrop');

   if (close.length) {
       for (var i = 0; i < close.length; i++) {
           close[i].addEventListener('click', function() {
               for (var j = 0; j < menu.length; j++) {
                   menu[j].classList.toggle('hidden');
               }
           });
       }
   }

   if (backdrop.length) {
       for (var i = 0; i < backdrop.length; i++) {
           backdrop[i].addEventListener('click', function() {
               for (var j = 0; j < menu.length; j++) {
                   menu[j].classList.toggle('hidden');
               }
           });
       }
   }
}
initJS();
})


    	let HeaderLinks = JSONLinks


	// svelte:prefetch

	async function CheckCurrentURL(URL) {
		return false;
	}

</script>


    <section>
        <nav class="px-4 sm:px-10 py-4 bg-[#295936]">
          <div class="flex items-center justify-between">
            <div class="w-full">
              <div class="flex flex-wrap items-center">
                <div class="w-auto mr-14">
                  <a class="inline-block" href="#">
                    <img src="/Images/heritage trail-dark.png" alt="" width="30%">
                  </a>
                </div>
                <div class="w-auto hidden lg:block">
                  <ul class="flex items-center">


                    {#each HeaderLinks.data as Link}
                    {#if CheckCurrentURL(Link) === true}
                    <li><a class="font-heading block text-base font-medium py-4 px-6 hover:bg-green-50 rounded-sm" href="{Link}">{Link}</a></li>
                    <li class="font-heading mr-12 text-white hover:text-gray-200"><a href="{Link}">{Link}</a></li>
                    {:else}
                    <li class="font-heading mr-12 text-white hover:text-gray-200"><a href="{Link}">{Link}</a></li>

                    {/if}
                {/each}


                  </ul>
                </div>
              </div>
            </div>
            <div class="w-auto hidden lg:flex items-center">
           
              <a class="inline-block py-4 px-8 font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600 border border-green-500 hover:border-green-600 rounded-sm transition duration-200" href="https://ipn.paymentus.com/rotp/TNOL">Donate</a></div>
            <div class="w-auto lg:hidden">
              <a class="navbar-burger inline-flex w-14 h-14 justify-center items-center bg-emerald-900 hover:bg-BackgroundColor rounded-full border" href="#">
                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 9H1M19 1H1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </a>
            </div>
          </div>
        </nav>
        <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div class="navbar-backdrop fixed inset-0 backdrop-blur backdrop-filter bg-gray-900 bg-opacity-50"></div>
          <nav class="relative pt-7 pb-8 bg-white h-full overflow-y-auto">
            <div class="flex flex-col px-6 h-full">
              <a class="inline-block ml-4 mb-7" href="#">
                <img src="/Images/heritage trail-dark.png" alt="">
              </a>
              <ul class="w-full mb-auto pb-16">


                {#each HeaderLinks.data as Link}
                {#if CheckCurrentURL(Link) === true}
                <li><a class="font-heading block text-base font-medium py-4 px-6 hover:bg-green-50 rounded-sm" href="{Link}">{Link}</a></li>
                {:else}
                <li><a class="font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm" href="{Link}">{Link}</a></li>
                {/if}
            {/each}



              </ul>
              <div class="w-full">
        <a class="block w-full py-4 px-4 mb-8 text-center font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600 border border-green-500 hover:border-green-600 rounded-sm transition duration-200" href="https://ipn.paymentus.com/rotp/TNOL">Donate</a>
                <p class="pl-2 text-sm">2022 © NOTL Heritage Trail</p>
              </div>
            </div>
          </nav>
        </div>
      </section>