import {
	CharactersActionPayload,
	CharactersCountActionPayload,
	FiltersActionPayload,
	IsLoadingActionPayload,
	PaginationCurrentPageActionPayload,
	PaginationTotalPagesActionPayload,
	ResultsContextAction,
	ResultsContextActionType,
} from './types';

export const setCharactersAction = (
	payload: CharactersActionPayload
): ResultsContextAction => ({
	type: ResultsContextActionType.SetCharacters,
	payload,
});

export const setCharactersCountAction = (
	payload: CharactersCountActionPayload
): ResultsContextAction => ({
	type: ResultsContextActionType.SetCharactersCount,
	payload,
});

export const setFiltersAction = (
	payload: FiltersActionPayload
): ResultsContextAction => ({
	type: ResultsContextActionType.SetFilters,
	payload,
});

export const setPaginationCurrentPageAction = (
	payload: PaginationCurrentPageActionPayload
): ResultsContextAction => ({
	type: ResultsContextActionType.SetPaginationCurrentPage,
	payload,
});

export const setPaginationTotalPagesAction = (
	payload: PaginationTotalPagesActionPayload
): ResultsContextAction => ({
	type: ResultsContextActionType.SetPaginationTotalPages,
	payload,
});

export const setIsLoadingAction = (
	payload: IsLoadingActionPayload
): ResultsContextAction => ({
	type: ResultsContextActionType.SetIsLoading,
	payload,
});
