

<script>
 
    const ACTIONURL = "https://submit-form.com/echo";
let message = '';
let email = '';
let phoneNumber = '';
let submitting = false



async function Submit(message, email, phoneNumber){
    console.log('Function Start')

try {
    submitting = true;
    await fetch(ACTIONURL, {
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify({
            message, email, phoneNumber
        }),

    })
    alert("Submitted");
}

finally {
    submitting = false
    console.log('Function End')
    alert("Completed");
}
}

/* 

Footer Code Placement

*/

let FooterLinks = {
    data:[
     
    "Home",
    "Objectives",
    "History",
    "Contact",
    "Sponsors",

    ]
 
}
console.log(FooterLinks)

// svelte:prefetch

async function CheckCurrentURL(URL){
return false

}
</script>

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
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
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


<div class="text-TextPrimary">
    
<header>
    <h1>Upper Canada Heritage Trail of Niagara-On-The-Lake</h1>
</header>
<nav>
    <b><a href="HeritageTrail.html">Home</a> &nbsp; <a href="Sponsors.html">Sponsors</a> &nbsp; <a
            href="Objectives.html">Objectives and Vision</a> &nbsp; <a href="Contact.html">Contact Us</a> &nbsp; <a
            href="History.html">History</a></b>
</nav>
<hr>
<main>

<div>
    <p>If you are interested in learning how you can support the trail by fundraising, making a donation, and
        helping to raise awareness and use of the Trail, please fill in the form below.</p>


    <form on:submit|preventDefault={Submit} class="bg-white m-4 text-black rounded p-3" action="https://submit-form.com/echo">
      
        <label for="email" class="font-semibold">Email</label>
        <br>
        <input type="email" name="email" required class="border-2 border-green-900 rounded text-black" bind:value="{email}">
        <br>
        <label for="phone">Phone Number</label>
        <br>
        <input type="tel" name="phone" required class="border-2 border-green-900 rounded text-black" bind:value="{phoneNumber}">
        <br>
        <label for="message">Message</label>
        <br>
        <textarea name="message" cols="5" rows="8" style="resize: none;" class="border-2 border-green-900 rounded text-black" bind:value="{message}"></textarea>
        <br>
      <button type="submit" class="px-4 py-2 bg-blue-300 text-black rounded m-2">Submit</button>
    </form>
</div>
</main>
<footer>


    <section class="py-14 bg-BackgroundColor">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap items-center justify-between -mx-4 pb-12">
            <div class="w-full lg:w-auto px-4 md:mb-8 lg:mb-8">
              <a class="inline-block" href="/">
                <img src="/Images/logo.jpg" alt="">
              </a>
            </div>
            <div class="w-full lg:w-auto px-4">
              <ul class="sm:flex flex-wrap items-center -mb-2">
                
{#each FooterLinks.data as Link}

{#if CheckCurrentURL(Link) === true}
<li class="mb-2 sm:mr-6 lg:mr-16"><a class="font-heading text-white hover:text-gray-100" href="/{Link}">{Link}</a></li>
{:else}
<li class="mb-2 sm:mr-6 lg:mr-16 group  hover:my-5 ease-in-out duration-75"><a class="font-heading text-white hover:text-gray-100  border-b border-DarkHighlight  group-hover:border-b-2 rounded p-[.25em] " href="/{Link}">{Link}</a></li>
{/if}
{/each}




              </ul>
            </div>
          </div> 
          <div class="flex flex-wrap items-center justify-between pt-5 border-t border-Highlight">
            <div class="flex flex-wrap items-center -mb-2">
              <a class="flex items-center justify-center w-12 h-12 mb-2 mr-2 rounded-full bg-[#1877f2] hover:bg-[#1877f280]" href="https://www.facebook.com/heritagetrailNOTL/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            
            </div>
            <small class="grid"> <span class="mt-6 sm:mt-0 text-gray-300">2022 © Niagara-On-The-Lake Heritage Trail</span>
                <a href="https://www.facebook.com/heritagetrailNOTL/ " target="_blank" rel="noopener noreferrer">@heritagetrailNOTL </a>

               </small>
          </div>
        </div>
      </section>

</footer>

</div>