import { INITIAL_STATE_FILTERS } from './state';
import {
	FiltersAction,
	FiltersActionPayload,
	FiltersActionType,
	FiltersState,
} from './types';

export const handlers = {
	[FiltersActionType.FielChange]: (
		state: FiltersState,
		payload: FiltersActionPayload
	) => ({
		...state,
		[payload.name]: payload.value,
	}),
	[FiltersActionType.ResetFilters]: () => ({
		...INITIAL_STATE_FILTERS,
	}),
};

export const filtersReducer = (state: FiltersState, action: FiltersAction) => {
	const handler = handlers[action.type];

	if (handler) {
		return handler(state, action.payload);
	}

	return state;
};
