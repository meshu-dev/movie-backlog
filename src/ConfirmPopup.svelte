<script>
	import { createEventDispatcher } from 'svelte';
	import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'sveltestrap';

	export let title;
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
		{title}
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