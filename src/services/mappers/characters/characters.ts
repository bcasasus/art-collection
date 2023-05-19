import { Character } from '@rmt/model';
import {
	type CharactersApiResponse,
	type ResultsApiResponse,
} from '@rmt/services';

export const mapCharacters = ({
	results,
}: CharactersApiResponse): Character[] =>
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
