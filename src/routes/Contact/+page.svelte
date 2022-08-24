

<script>
    const ACTIONURL = "https://submit-form.com/echo";
let message = '';
let email = '';
let phoneNumber = '';
let submitting = false

// Example Form Spark


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


<div class="bg-emerald-900">
    
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
        <textarea name="message" cols="100" rows="8" style="resize: none;" class="border-2 border-green-900 rounded text-black" bind:value="{message}"></textarea>
        <br>
      <button type="submit" class="px-4 py-2 bg-blue-300 text-black rounded m-2">Submit</button>
    </form>
</div>
</main>
<footer>
    <!--sponsors may be able to fit here with a "and thanks to our sponsors"-->
</footer>

</div>