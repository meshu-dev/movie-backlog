<script>
	import { movies } from './store.js';
	import { Input, Button } from 'sveltestrap';
	import { createForm } from 'svelte-forms-lib';
	import { validate } from './MovieValidate.js';

	let showAddForm = false,
		movieName = '';

	const addFormToggle = () => {
		showAddForm = !showAddForm;
		movieName = '';
		$form.title = '';
		$errors.title = '';
	}

    const { form, errors, state, handleChange, handleSubmit } = createForm({
      initialValues: {
        title: ""
      },
      validate: validate,
      onSubmit: values => {
		movies.update(m => {
			m.push(values.title);
			return m;
		});

		addFormToggle();
      }
    });
</script>

{#if showAddForm}
    {#if $errors.title}
    	<small class="error-msg">{$errors.title}</small>
    {/if}
	<form id="add-form" on:submit={handleSubmit}>
		<Input
			type="text"
			name="title"
			bind:value={$form.title}
			placeholder="Enter movie name" required />
		<Button color="primary" type="submit">
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
