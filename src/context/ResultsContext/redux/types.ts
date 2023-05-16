export interface ResultsContextState {
	results: ResultsContext[];
}

export interface ResultsContextDispatch {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setResults: (payload: any) => void;
}

export interface ResultsContext {
	id: number;
	name: string;
	status: 'Alive' | 'Dead';
	species: string;
	type: string;
	gender: 'Male' | 'Female';
	originLocation: Location;
	currentLocation: Location;
}

export interface Location {
	name: string;
	url: string;
}

export interface ResultsContextActionPayload {
	results: ResultsContext[];
}
export enum ResultsContextActionType {
	SetResults = 'set results',
}

export interface ResultsContextAction {
	type: ResultsContextActionType;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	payload: any;
}

export interface ResultsContextActionFactory {
	(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		payload: any
	): ResultsContextAction;
}
