import { type Character } from '@rmt/model';

export interface ResultsContextState {
	results: Character[];
}

export interface ResultsContextDispatch {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setResults: (payload: any) => void;
}

export interface ResultsContextActionPayload {
	results: Character[];
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
