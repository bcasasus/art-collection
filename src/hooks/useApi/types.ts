import { type Params, type CharactersApiResponse } from '@rmt/services';

export interface ApiLogic {
	fetchCharacters: (params?: Params) => Promise<CharactersApiResponse>;
}
