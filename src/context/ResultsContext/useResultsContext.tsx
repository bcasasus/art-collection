import React from 'react';
import { ResultsDispatchContext, ResultsStateContext } from './resultsContext';
import { ResultsContextDispatch, ResultsContextState } from './redux/types';

export const useResultsStateContext = (): ResultsContextState => {
	const stateContext = React.useContext(ResultsStateContext);

	if (stateContext === undefined) {
		throw new Error(
			'useResultsStateContext must be used within a ResultsStateContextProvider'
		);
	}

	return stateContext as ResultsContextState;
};

export const useResultsDispatchContext = (): ResultsContextDispatch => {
	const dispatchContext = React.useContext(ResultsDispatchContext);

	if (dispatchContext === undefined) {
		throw new Error(
			'useResultsDispatchContext must be used within a ResultsDispatchContextProvider'
		);
	}

	return dispatchContext;
};
