<script>
	import AddForm from './AddForm.svelte';
	import MovieList from './MovieList.svelte';
</script>

<svelte:head>
	<title>Movie Backlog</title>
</svelte:head>

<header>
	<section>
		<span>Movie Backlog</span>
	</section>
</header>
<main>
	<AddForm />
	<MovieList />
</main>

<style>
	header {
		box-shadow: 0 -0.4rem 0.9rem 0.2rem rgba(0,0,0,.5);
		background-color: #FF3E00;
		height: 4rem;
	}

	header section {
		margin: 0 auto;
		height: inherit;
		font-size: 1.5rem;
		display: flex;
		align-items: center;
		width: 50rem;
		color: #FFF;
	}

	main {
		margin: 0 auto;
		padding: 1em;
		width: 50rem;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	h1 {
		font-size: 4em;
		font-weight: 100;
	}
</style>