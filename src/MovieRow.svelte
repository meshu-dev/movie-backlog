<script>
	import { movies } from './store.js';
	
	export let title;
	export let movieIndex;

	let showEditField = false;

	function editFormToggle() {
		showEditField = !showEditField;
	}

	function submit() {
		movies.update(m => {
			m[movieIndex] = title;
			return m;
		});

		showEditField = false;
	}
</script>

{#if showEditField}
	<input bind:value={title}>
	<button on:click={submit}>
		Edit
	</button>
	<button on:click={editFormToggle}>
		Cancel 
	</button>
{:else}
	<span class="movie-title" on:click={editFormToggle}>{title}</span>
{/if}

<style>
	.movie-title:hover {
		cursor: pointer;
	}
</style>