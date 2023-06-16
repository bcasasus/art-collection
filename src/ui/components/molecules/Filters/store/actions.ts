import {
	FiltersAction,
	FiltersActionPayload,
	FiltersActionType,
} from './types';

export const filtersAction = {
	fieldChange: ({ name, value }: FiltersActionPayload): FiltersAction => ({
		type: FiltersActionType.FielChange,
		payload: {
			name,
			value,
		},
	}),
	resetForm: (): FiltersAction => ({
		type: FiltersActionType.ResetFilters,
		payload: {},
	}),
};
