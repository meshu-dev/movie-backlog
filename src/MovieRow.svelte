<script>
	import { movies } from './store.js';
	import { Button } from 'sveltestrap';
	import DeletePopup from './DeletePopup.svelte';
	
	export let title;
	export let movieIndex;

	let showEditField = false,
		validationMsg = '',
		movieName = '',
		deletePopup = false;

	const showForm = () => {
		movieName = title;
		showEditField = true;
	}

	const hideForm = () => {
		movieName = '';
		validationMsg = '';
		showEditField = false;
	}

	const editAction = () => {
		if (movieName.length === 0) {
			validationMsg = 'Movie name must not be empty';
			return;
		}

		hideForm();
		title = movieName;
	}

	const showDeletePopup = () => (deletePopup = true);

	const deleteAction = (event) => {
		if (event.detail.confirm === true) {
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
	<Button color="primary" on:click={editAction}>
	  Edit
	</Button>
	<Button color="danger" on:click={showDeletePopup}>
	  Delete 
	</Button>
	<Button color="dark" on:click={hideForm}>
	  Cancel
	</Button>
	<DeletePopup bind:open={deletePopup} on:response={deleteAction} />
{:else}
	<span class="movie-title" on:click={showForm}>{title}</span>
{/if}

<style>
	.movie-title:hover {
		cursor: pointer;
	}
</style>