import { Location } from '@rmt/model';

export interface CharactersApiResponse {
	info: CharactersInfoApiResponse;
	results: CharactersResultsApiResponse[];
}

export interface CharactersInfoApiResponse {
	count: number;
	next: string | null;
	pages: number;
	prev: string | null;
}

export interface CharactersResultsApiResponse {
	id: number;
	name: string;
	status: 'Alive' | 'Dead';
	species: string;
	type: string;
	gender: 'Male' | 'Female';
	origin: Location;
	location: Location;
	image: string;
}
