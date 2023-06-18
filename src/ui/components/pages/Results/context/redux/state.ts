import { ResultsContextState, ResultsDipatchContextState } from './types';

export const initialResultsContext: ResultsContextState = {
	characters: [],
	charactersCount: null,
	filters: {
		name: '',
		status: '',
		gender: '',
	},
	pagination: {
		currentPage: 1,
		totalPages: 1,
	},
	isLoading: false,
};

export const initialResultsDispatchContext: ResultsDipatchContextState = {
	setCharacters: () => undefined,
	setCharactersCount: () => undefined,
	setFilters: () => undefined,
	setPaginationCurrentPage: () => undefined,
	setPaginationTotalPages: () => undefined,
	setIsLoading: () => undefined,
};
