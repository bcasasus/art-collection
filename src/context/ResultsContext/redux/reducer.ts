import {
	ResultsContextAction,
	ResultsContextActionFactory,
	ResultsContextActionPayload,
	ResultsContextActionType,
	ResultsContextState,
} from './types';

const handlers = {
	[ResultsContextActionType.SetResults]: (
		state: ResultsContextState,
		payload: ResultsContextActionPayload
	) => ({
		...state,
		results: [...payload.results],
	}),
};

export const resultsContextReducer = (
	state: ResultsContextState,
	action: ResultsContextAction
): ResultsContextState => {
	const handler = handlers[action.type];

	if (handler) {
		return handler(state, action.payload);
	}

	return state;
};

export const resultsContextDispatcherFactory =
	(dispatch: React.Dispatch<ResultsContextAction>) =>
	(actionFactory: ResultsContextActionFactory) =>
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	(payload: any) =>
		dispatch(actionFactory(payload));
