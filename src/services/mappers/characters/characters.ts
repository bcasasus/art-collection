import { Character } from '@rmt/model';
import {
	type CharactersApiResponse,
	type ResultsApiResponse,
} from '@rmt/services';

export const mapCharacters = ({
	results,
}: CharactersApiResponse): Character[] =>
	results.map(
		({
			id,
			name,
			status,
			species,
			type,
			gender,
			origin,
			location,
		}: ResultsApiResponse): Character => ({
			id,
			name,
			status,
			species,
			type,
			gender,
			originLocation: origin,
			currentLocation: location,
		})
	);
