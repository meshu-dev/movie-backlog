<script>
	import { movies } from './store.js';

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
	<button on:click={submit}>
		Add 
	</button>
	<button on:click={addFormToggle}>
		Cancel 
	</button>
{:else}
	<button on:click={addFormToggle}>
		Add Movie 
	</button>
{/if}
