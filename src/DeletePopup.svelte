<script>
	import { createEventDispatcher } from 'svelte';
	import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'sveltestrap';

	export let open = false;
	const toggle = () => (open = !open);
	const dispatch = createEventDispatcher();

	const confirm = () => {
		dispatch('response', {
			confirm: true
		});
	}

	const cancel = () => {
		dispatch('response', {
			confirm: false
		});
	}
</script>

<Modal isOpen={open} {toggle}>
	<ModalBody>
		Are you sure you want to delete this movie?
	</ModalBody>
	<ModalFooter>
		<Button color="primary" on:click={confirm}>
			Confirm
		</Button>
		<Button color="secondary" on:click={cancel}>
			Cancel
		</Button>
	</ModalFooter>
</Modal>