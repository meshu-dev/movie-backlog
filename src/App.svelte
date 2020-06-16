<script>
	let movies = [
		'Demolition Man',
		'Aliens',
		'The Thing'
	];
</script>

<main>
	<h1>Movie Backlog</h1>
	<button on:click={add}>
		Add Movie
	</button>
	<div id="movie-list">
		<ul>
			{#each movies as movie, i}
				<li>{movie}</li>
			{/each}
		</ul>
	</div>
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
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	#movie-list {
		font-size: 2rem;
	}

	#movie-list li {
		margin-bottom: 1rem;
	}
</style>