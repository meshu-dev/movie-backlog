import { writable } from 'svelte/store';

export const movies = writable(
	JSON.parse(localStorage.getItem('movies')) || []
);

movies.subscribe(
	value => localStorage.setItem('movies', JSON.stringify(value))
);
