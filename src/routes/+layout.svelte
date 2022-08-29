<script>
	import Header from '$lib/Components/header.svelte';
	import '../app.postcss';
	import Footer from '$lib/Components/footer.svelte';
</script>

<Header />
<slot>
	<!--Keep Empty For Content-->
</slot>
<Footer />
