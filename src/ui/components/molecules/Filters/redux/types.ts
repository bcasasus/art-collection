export type FiltersActionPayload = {
	name: string;
	value: string;
};

export enum FiltersActionType {
	FielChange = 'field change',
	ResetFilters = 'reset filters',
}

export type FiltersAction = {
	type: FiltersActionType;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	payload: any;
};

export type FiltersState = {
	name: string;
	status: string;
	gender: string;
};
