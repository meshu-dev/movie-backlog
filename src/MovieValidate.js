import { get } from 'svelte/store';
import { movies } from './store.js';

export function validate(values) {
	const errors = {};
	const movieList = get(movies);

	if (values.movieIndex && movieList[values.movieIndex] == values.title) {
		return {};
	}

	const nameIndex = movieList.indexOf(values.title);

  	if (nameIndex > -1) {
    	errors['title'] = 'Movie name already added to list';
  	}
	return errors;
}

