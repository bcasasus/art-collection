import { Location } from '@rmt/model';

export interface CharactersApiResponse {
	results: ResultsApiResponse[];
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
