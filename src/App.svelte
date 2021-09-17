<script>
  import Header from "./Header.svelte";
  import Intro from "./Intro.svelte";
</script>


<Header/>

<main>
	<div style="height:100%; max-width: 1200px; margin: auto;">
		<Intro/>
	</div>
</main>

<style>

	/*
	********************
	       Raleway
	********************
	*/

	@font-face {
	    font-family: 'Raleway';
	    src: url('/assets/fonts/raleway/Raleway-extralight.woff');
	    font-weight: 200;
	    font-style: normal;
	    font-stretch: normal;
	    font-display: swap;
	}

	@font-face {
	    font-family: 'Raleway';
	    src: url('/assets/fonts/raleway/Raleway-medium.woff');
	    font-weight: 400;
	    font-style: normal;
	    font-stretch: normal;
	    font-display: swap;
	}

	@font-face {
	    font-family: 'Raleway';
	    src: url('/assets/fonts/raleway/Raleway-heavy.woff');
	    font-weight: 700;
	    font-style: normal;
	    font-stretch: normal;
	    font-display: swap;
	}

	/*
	********************
	       Avenir
	********************
	*/

	@font-face {
	    font-family: 'Avenir';
	    src: url('/assets/fonts/avenir/Avenir-Light.woff');
	    font-weight: 400;
	    font-style: normal;
	    font-stretch: normal;
	    font-display: swap;
	}

	@font-face {
	    font-family: 'Avenir';
	    src: url('/assets/fonts/avenir/Avenir-Medium.woff');
	    font-weight: 500;
	    font-style: normal;
	    font-stretch: normal;
	    font-display: swap;
	}

	@font-face {
	    font-family: 'Avenir';
	    src: url('/assets/fonts/avenir/Avenir-Heavy.woff');
	    font-weight: 700;
	    font-style: normal;
	    font-stretch: normal;
	    font-display: swap;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}


</style>