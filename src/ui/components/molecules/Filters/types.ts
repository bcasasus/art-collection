import { CharacterFilters } from '@rmt/model';

export interface FilterProps {
	onSubmit: (filters: CharacterFilters) => void;
}
