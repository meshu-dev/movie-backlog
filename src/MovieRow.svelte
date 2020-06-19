<script>
	import { movies } from './store.js';
	
	export let title;
	export let movieIndex;

	let showEditField = false,
		validationMsg = '',
		movieName = '';

	function showForm() {
		movieName = title;
		showEditField = true;
	}

	function hideForm() {
		movieName = '';
		validationMsg = '';
		showEditField = false;
	}

	function submit() {
		if (movieName.length === 0) {
			validationMsg = 'Movie name must not be empty';
			return;
		}
		
		title = movieName;
		showEditField = false;
	}
</script>

{#if showEditField}
	{#if validationMsg}
		<div class="error-msg">{validationMsg}</div>
	{/if}
	<input bind:value={movieName}>
	<button on:click={submit}>
		Edit
	</button>
	<button on:click={hideForm}>
		Cancel 
	</button>
{:else}
	<span class="movie-title" on:click={showForm}>{title}</span>
{/if}

<style>
	.movie-title:hover {
		cursor: pointer;
	}
</style>