<script>
	import { movies } from './store.js';

	let showAddForm = false,
		movieName = '';

	function addFormToggle() {
		showAddForm = !showAddForm;
	}

	function submit() {
		movies.update(m => {
			m.push(movieName);
			return m;
		});

		movieName = '';
		showAddForm = false;
	}
</script>

{#if showAddForm}
	<input bind:value={movieName}>
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