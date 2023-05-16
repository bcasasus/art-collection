import {
	ResultsContextActionType,
	ResultsContextAction,
	ResultsContextActionPayload,
} from './types';

export const setResultsAction = (
	payload: ResultsContextActionPayload
): ResultsContextAction => ({
	type: ResultsContextActionType.SetResults,
	payload,
});
