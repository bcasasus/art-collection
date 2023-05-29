import { CharacterParams } from '@rmt/services';

export interface FilterProps {
	fetchCharacters: (filters: CharacterParams) => void;
}
