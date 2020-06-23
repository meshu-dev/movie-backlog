<script>
	import { movies } from './store.js';
	import MovieRow from './MovieRow.svelte';
</script>

<div id="movie-list">
	{#if $movies.length > 0}
		<ul>
			{#each $movies as movie, i}
				<li>
					<MovieRow movieIndex={i} title={movie} />
				</li>
			{/each}
		</ul>
	{:else}
		<span>No movies added yet.</span>
	{/if}
</div>

<style>
	#movie-list {
		font-size: 1.2rem;
		margin-top: 1rem;
	}
	#movie-list li {
		margin-bottom: 1rem;
	}
</style>