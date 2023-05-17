import { Character } from '@rmt/model';
import {
	CharactersApiResponse,
	ResultsApiResponse,
} from '../../response/types';

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
