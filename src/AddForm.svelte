<script>
	import { movies } from './store.js';
	import { Button } from 'sveltestrap';

	let showAddForm = false,
		validationMsg = '',
		movieName = '';

	function addFormToggle() {
		showAddForm = !showAddForm;
		validationMsg = '';
	}

	function submit() {
		if (movieName.length === 0) {
			validationMsg = 'Movie name must not be empty';
			return;
		}

		movies.update(m => {
			m.push(movieName);
			return m;
		});

		movieName = '';
		showAddForm = false;
	}
</script>

{#if showAddForm}
	{#if validationMsg}
		<div class="error-msg">{validationMsg}</div>
	{/if}
	<input type="text" bind:value={movieName} required>
	<Button color="primary" on:click={submit}>
	  Add
	</Button>
	<Button color="dark" on:click={addFormToggle}>
	  Cancel
	</Button>
{:else}
	<Button color="dark" on:click={addFormToggle}>
	  Add Movie 
	</Button>
{/if}
