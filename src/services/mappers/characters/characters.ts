import { Character } from '@rmt/model';
import {
	InfoApiResponse,
	type CharactersApiResponse,
	type ResultsApiResponse,
} from '@rmt/services';

export const mapCharacters = (apiResponse: CharactersApiResponse) => ({
	results: mapResults(apiResponse.results),
	pagination: mapPagination(apiResponse.info),
	totalCharactersCount: mapTotalCharactersCount(apiResponse.info),
});

export const mapResults = (results: ResultsApiResponse[]): Character[] =>
	results.map(
		(character: ResultsApiResponse): Character => ({
			id: character.id,
			name: character.name,
			status: character.status,
			species: character.species,
			type: character.type,
			gender: character.gender,
			originLocation: character.origin,
			currentLocation: character.location,
			image: character.image,
		})
	);

export const mapPagination = (info: InfoApiResponse) => ({
	pages: info.pages,
	nextPageEndpoint: info.next,
	previousPageEndpoin: info.prev,
});

export const mapTotalCharactersCount = (info: InfoApiResponse) => info.count;
