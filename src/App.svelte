<script>
	import AddForm from './AddForm.svelte';
	import MovieList from './MovieList.svelte';
</script>

<svelte:head>
	<title>Movie Backlog</title>
</svelte:head>

<main>
	<h1>Movie Backlog</h1>
	<AddForm />
	<MovieList />
</main>

<style>
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