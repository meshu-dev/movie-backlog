<script>
	import { movies } from './store.js';
	import { Input, Button } from 'sveltestrap';

	let showAddForm = false,
		validationMsg = '',
		movieName = '';

	const addFormToggle = () => {
		showAddForm = !showAddForm;
		validationMsg = '';
		movieName = '';
	}

	const submit = () => {
		if (movieName.length === 0) {
			//validationMsg = 'Movie name must not be empty';
			return;
		}

		let nameIndex = $movies.indexOf(movieName);

		if (nameIndex > -1) {
			validationMsg = 'Movie name already added to list';
			return;
		}

		movies.update(m => {
			m.push(movieName);
			return m;
		});

		addFormToggle();
	}
</script>

{#if showAddForm}
	{#if validationMsg}
		<div class="error-msg">{validationMsg}</div>
	{/if}
	<form id="add-form" onsubmit="return false">
		<Input type="text" bind:value={movieName} placeholder="Enter movie name" required />
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
