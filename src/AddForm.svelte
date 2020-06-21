<script>
	import { movies } from './store.js';
	import { Input, Button } from 'sveltestrap';

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
	<form id="add-form">
		{#if validationMsg}
			<div class="error-msg">{validationMsg}</div>
		{/if}
		<Input type="text" bind:value={movieName} required />
		<Button color="primary" on:click={submit}>
		  Add
		</Button>
		<Button color="dark" on:click={addFormToggle}>
		  Cancel
		</Button>
	</form>
{:else}
	<Button color="dark" on:click={addFormToggle}>
	  Add Movie 
	</Button>
{/if}

<style>
	#add-form {
		display: flex;
		width: 21rem;
		justify-content: space-around;
	}
</style>
