import { Character, CharactersInformation } from '@rmt/model';
import {
	CharactersInfoApiResponse,
	type CharactersApiResponse,
	type CharactersResultsApiResponse,
} from '@rmt/services';

export const mapCharacters = (apiResponse: CharactersApiResponse) => ({
	results: mapCharactersResults(apiResponse.results),
	resultsInfo: mapCharactersResultsInfo(apiResponse.info),
});

export const mapCharactersResults = (
	results: CharactersResultsApiResponse[]
): Character[] =>
	results.map(
		(character: CharactersResultsApiResponse): Character => ({
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

export const mapCharactersResultsInfo = (
	info: CharactersInfoApiResponse
): CharactersInformation => ({
	totalPages: info.pages,
	totalCharactersCount: info.count,
});
