import {
	CharactersActionPayload,
	CharactersCountActionPayload,
	FiltersActionPayload,
	IsLoadingActionPayload,
	PaginationCurrentPageActionPayload,
	PaginationTotalPagesActionPayload,
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
	[ResultsContextActionType.SetCharactersCount]: (
		state: ResultsContextState,
		payload: CharactersCountActionPayload
	): ResultsContextState => ({
		...state,
		charactersCount: payload.charactersCount,
	}),
	[ResultsContextActionType.SetFilters]: (
		state: ResultsContextState,
		payload: FiltersActionPayload
	): ResultsContextState => ({
		...state,
		filters: payload.filters,
	}),
	[ResultsContextActionType.SetPaginationCurrentPage]: (
		state: ResultsContextState,
		payload: PaginationCurrentPageActionPayload
	): ResultsContextState => ({
		...state,
		pagination: { ...state.pagination, currentPage: payload.currentPage },
	}),
	[ResultsContextActionType.SetPaginationTotalPages]: (
		state: ResultsContextState,
		payload: PaginationTotalPagesActionPayload
	): ResultsContextState => ({
		...state,
		pagination: { ...state.pagination, totalPages: payload.totalPages },
	}),
	[ResultsContextActionType.SetIsLoading]: (
		state: ResultsContextState,
		payload: IsLoadingActionPayload
	): ResultsContextState => ({
		...state,
		isLoading: payload.isLoading,
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
