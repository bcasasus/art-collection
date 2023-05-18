import React from 'react';
import { ResultsContextState } from '../redux/types';
import { ResultsStateContext } from './ResultsStateContextProvider';

export const useResultsStateContext = (): ResultsContextState => {
	const stateContext = React.useContext(ResultsStateContext);

	if (stateContext === undefined) {
		throw new Error(
			'useResultsStateContext must be used within a ResultsStateContextProvider'
		);
	}

	return stateContext as ResultsContextState;
};
