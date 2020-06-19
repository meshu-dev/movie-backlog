<script>
	import { movies } from './store.js';
	import MovieRow from './MovieRow.svelte';

	//movies.set(['Demolition Man', 'Aliens', 'The Thing', 'Die Hard']);
	console.log('movies', $movies);
</script>

<div id="movie-list">
	<ul>
		{#each $movies as movie, i}
			<li>
				<MovieRow movieIndex={i} title={movie} />
			</li>
		{/each}
	</ul>
</div>

<style>
	#movie-list {
		font-size: 1.2rem;
	}

	#movie-list li {
		margin-bottom: 1rem;
	}
</style>