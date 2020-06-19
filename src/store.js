import { writable } from 'svelte/store';

export const movies = writable(
	JSON.parse(localStorage.getItem('movies')) || []
);

movies.subscribe(
	value => localStorage.setItem('movies', JSON.stringify(value))
);


/*
function createStore() {
	const { subscribe, set, update } = writable(
		JSON.parse(localStorage.getItem('movies')) || {}
	);

	return {
		subscribe,
		setMovies: (movies) => {
			set(localStorage.setItem('movies', JSON.stringify(movies)))
		}
	};
}

export const store = createStore(); */
