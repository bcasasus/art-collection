import {
	Character,
	CharacterFilters,
	CharactersCount,
	Pagination,
} from '@rmt/model';

export type CharactersActionPayload = {
	characters: Character[];
};

export type CharactersCountActionPayload = {
	charactersCount: CharactersCount;
};

export type FiltersActionPayload = {
	filters: CharacterFilters;
};

export type PaginationCurrentPageActionPayload = {
	currentPage: number;
};
export type PaginationTotalPagesActionPayload = {
	totalPages: number;
};

export type IsLoadingActionPayload = {
	isLoading: boolean;
};

export enum ResultsContextActionType {
	SetCharacters = 'set characters',
	SetCharactersCount = 'set characters count',
	SetFilters = 'set filters',
	SetPaginationCurrentPage = 'set pagination current page',
	SetPaginationTotalPages = 'set pagination total pages',
	SetIsLoading = 'set is loading',
}

export type ResultsContextAction = {
	type: ResultsContextActionType;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	payload: any;
};

export type ResultsContextState = {
	characters: Character[];
	charactersCount: CharactersCount;
	filters: CharacterFilters;
	pagination: Pagination;
	isLoading: boolean;
};

export type ResultsDipatchContextState = {
	setCharacters: (payload: CharactersActionPayload) => void;
	setCharactersCount: (payload: CharactersCountActionPayload) => void;
	setFilters: (payload: FiltersActionPayload) => void;
	setPaginationCurrentPage: (
		payload: PaginationCurrentPageActionPayload
	) => void;
	setPaginationTotalPages: (payload: PaginationTotalPagesActionPayload) => void;
	setIsLoading: (payload: IsLoadingActionPayload) => void;
};
