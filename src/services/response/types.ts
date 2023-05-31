import { Location } from '@rmt/model';

export interface CharactersApiResponse {
	info: InfoApiResponse;
	results: ResultsApiResponse[];
}

export interface InfoApiResponse {
	count: number;
	next: string | null;
	pages: number;
	prev: string | null;
}

export interface ResultsApiResponse {
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
