import {
	CharactersActionPayload,
	FiltersActionPayload,
	PaginationActionPayload,
	ResultsContextAction,
	ResultsContextActionType,
} from './types';

export const setCharactersAction = (
	payload: CharactersActionPayload
): ResultsContextAction => ({
	type: ResultsContextActionType.SetCharacters,
	payload,
});

export const setFiltersAction = (
	payload: FiltersActionPayload
): ResultsContextAction => ({
	type: ResultsContextActionType.SetFilters,
	payload,
});

export const setPaginationAction = (
	payload: PaginationActionPayload
): ResultsContextAction => ({
	type: ResultsContextActionType.SetPagination,
	payload,
});
