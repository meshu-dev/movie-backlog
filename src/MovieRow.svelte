<script>
	import { movies } from './store.js';
	import { Input, Button } from 'sveltestrap';
	import { createForm } from 'svelte-forms-lib';
	import { validate } from './MovieValidate.js';
	import ConfirmPopup from './ConfirmPopup.svelte';
	
	export let movieIndex;
	export let title;

	let showEditField = false,
		deletePopup = false;

	const showForm = () => {
		$form.title = $movies[movieIndex];
		$errors.title = '';
		showEditField = true;
	}

	const hideForm = () => {
		$form.title = '';
		$errors.title = '';
		showEditField = false;
		deletePopup = false;
	}

	const showDeletePopup = () => (deletePopup = true);

	const deleteAction = (event) => {
		if (event.detail.confirm === true) {
			movies.update(m => {
				m.splice(movieIndex, 1); 
				return m;
			});
		}
		hideForm();
	}

    const { form, errors, state, handleChange, handleSubmit } = createForm({
      initialValues: {
        title: ""
      },
      validate: values => {
      	values.movieIndex = movieIndex;
      	return validate(values);
      },
      onSubmit: values => {
		movies.update(m => {
			m[movieIndex] = values.title;
			return m;
		});
		hideForm();
      }
    });
</script>

{#if showEditField}
    {#if $errors.title}
    	<small class="error-msg">{$errors.title}</small>
    {/if}
    <div id="edit-row">
    	<form on:submit={handleSubmit}>
			<Input
				type="text"
				name="title"
				bind:value={$form.title}
				placeholder="Enter movie name" required />
			<Button color="primary" type="submit">
			  Edit
			</Button>
		</form>
		<Button color="danger" on:click={showDeletePopup}>
		  Delete 
		</Button>
		<Button color="dark" on:click={hideForm}>
		  Cancel
		</Button>
	</div>
{:else}
	<span class="movie-title" on:click={showForm}>{title}</span>
{/if}

<ConfirmPopup
	title="Are you sure you want to delete this movie?"
	bind:open={deletePopup}
	on:response={deleteAction} />

<style>
	#edit-row {
		display: flex;
		width: 27rem;
		justify-content: space-around;
	}
	#edit-row form {
		display: flex;
		width: 16rem;
		justify-content: space-around;
	}
	.movie-title:hover {
		cursor: pointer;
	}
</style>