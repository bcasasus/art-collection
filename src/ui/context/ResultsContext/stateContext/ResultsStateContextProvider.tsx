import React from 'react';
import { ResultsContextState } from '../redux/types';
import { initialResultsStateContext } from './constants';

export const ResultsStateContext = React.createContext<ResultsContextState>(
	initialResultsStateContext
);

export const ResultsStateContextProvider = ({
	children,
	state,
}: React.PropsWithChildren<{ state: ResultsContextState }>) => {
	const resultsStateContextValue = state;

	return (
		<ResultsStateContext.Provider value={resultsStateContextValue}>
			{children}
		</ResultsStateContext.Provider>
	);
};
