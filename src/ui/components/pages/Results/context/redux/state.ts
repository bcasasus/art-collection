import { ResultsContextState, ResultsDipatchContextState } from './types';

export const initialResultsContext: ResultsContextState = {
	characters: [],
	filters: {
		name: '',
		status: '',
		gender: '',
	},
	pagination: {
		currentPage: 1,
		totalPages: 1,
	},
};

export const initialResultsDispatchContext: ResultsDipatchContextState = {
	setCharacters: () => undefined,
	setFilters: () => undefined,
	setPagination: () => undefined,
};
