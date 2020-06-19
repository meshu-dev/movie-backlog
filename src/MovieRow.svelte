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

	function editAction() {
		if (movieName.length === 0) {
			validationMsg = 'Movie name must not be empty';
			return;
		}
		
		title = movieName;
		showEditField = false;
	}

	function deleteAction() {
		let doDelete = window.confirm('Are you sure you want to delete this movie?');

		if (doDelete === true) {
			movies.update(m => {
				m.splice(movieIndex, 1);
				return m;
			});
		} else {
			hideForm();
		}
	}
</script>

{#if showEditField}
	{#if validationMsg}
		<div class="error-msg">{validationMsg}</div>
	{/if}
	<input bind:value={movieName}>
	<button on:click={editAction}>Edit</button>
	<button on:click={deleteAction}>Delete</button>
	<button on:click={hideForm}>Cancel</button>
{:else}
	<span class="movie-title" on:click={showForm}>{title}</span>
{/if}

<style>
	.movie-title:hover {
		cursor: pointer;
	}
</style>