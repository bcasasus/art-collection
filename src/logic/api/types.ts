import { type Params, type CharactersApiResponse } from '@rmt/services';

export interface ApiStructure {
	fetchCharacters: (params?: Params) => Promise<CharactersApiResponse>;
}
