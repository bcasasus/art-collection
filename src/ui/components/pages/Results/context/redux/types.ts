import { Character, CharacterFilters, Pagination } from '@rmt/model';

export type CharactersActionPayload = {
	characters: Character[];
};

export type FiltersActionPayload = {
	filters: CharacterFilters;
};

export type PaginationActionPayload = {
	pagination: Pagination;
};

export enum ResultsContextActionType {
	SetCharacters = 'set characters',
	SetFilters = 'set filters',
	SetPagination = 'set pagination',
}

export type ResultsContextAction = {
	type: ResultsContextActionType;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	payload: any;
};

export type ResultsContextState = {
	characters: Character[];
	filters: CharacterFilters;
	pagination: Pagination;
};

export type ResultsDipatchContextState = {
	setCharacters: (payload: CharactersActionPayload) => void;
	setFilters: (payload: FiltersActionPayload) => void;
	setPagination: (payload: PaginationActionPayload) => void;
};
