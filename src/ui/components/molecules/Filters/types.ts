import { CharacterParams } from '@rmt/services';

export interface FilterProps {
	onSubmit: (filters: CharacterParams) => void;
}
