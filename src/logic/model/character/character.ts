export interface Character {
	id: number;
	name: string;
	status: 'Alive' | 'Dead';
	species: string;
	type: string;
	gender: 'Male' | 'Female';
	originLocation: Location;
	currentLocation: Location;
	image: string;
}

export interface Location {
	name: string;
	url: string;
}

export interface CharactersFetchInformation {
	totalPages: number;
	totalCharactersCount: number;
}

export type CharacterFilters = {
	name: string;
	status: string;
	gender: string;
};
