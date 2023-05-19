import React from 'react';
import { ResultsContextDispatch } from '../redux/types';
import { ResultsDispatchContext } from './ResultsDispatchContextProvider';

export const useResultsDispatchContext = (): ResultsContextDispatch => {
	const dispatchContext = React.useContext(ResultsDispatchContext);

	if (dispatchContext === undefined) {
		throw new Error(
			'useResultsDispatchContext must be used within a ResultsDispatchContextProvider'
		);
	}

	return dispatchContext;
};
