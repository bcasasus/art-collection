import {
	CharactersActionPayload,
	FiltersActionPayload,
	PaginationActionPayload,
	ResultsContextAction,
	ResultsContextActionType,
	ResultsContextState,
} from './types';

export const handlers = {
	[ResultsContextActionType.SetCharacters]: (
		state: ResultsContextState,
		payload: CharactersActionPayload
	): ResultsContextState => ({
		...state,
		characters: payload.characters,
	}),
	[ResultsContextActionType.SetFilters]: (
		state: ResultsContextState,
		payload: FiltersActionPayload
	): ResultsContextState => ({
		...state,
		filters: payload.filters,
	}),
	[ResultsContextActionType.SetPagination]: (
		state: ResultsContextState,
		payload: PaginationActionPayload
	): ResultsContextState => ({
		...state,
		pagination: payload.pagination,
	}),
};

export const resultsContextReducer = (
	state: ResultsContextState,
	action: ResultsContextAction
) => {
	const handler = handlers[action.type];

	if (handler) {
		return handler(state, action.payload);
	}

	return state;
};
