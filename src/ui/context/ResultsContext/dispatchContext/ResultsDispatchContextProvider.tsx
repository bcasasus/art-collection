import React, { useMemo } from 'react';
import { ResultsContextAction, ResultsContextDispatch } from '../redux/types';
import { resultsContextDispatcherFactory } from '../redux/reducer';
import { setResultsAction } from '../redux/action';
import { initialResultsDispatchContext } from './constants';

export const ResultsDispatchContext =
	React.createContext<ResultsContextDispatch>(initialResultsDispatchContext);

export const ResultsDispatchContextProvider = ({
	children,
	dispatch,
}: React.PropsWithChildren<{
	dispatch: React.Dispatch<ResultsContextAction>;
}>) => {
	const dispatcher = resultsContextDispatcherFactory(dispatch);

	const resultsDispatchContextValue: ResultsContextDispatch = useMemo(
		() => ({
			setResults: dispatcher(setResultsAction),
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[dispatch]
	);

	return (
		<ResultsDispatchContext.Provider value={resultsDispatchContextValue}>
			{children}
		</ResultsDispatchContext.Provider>
	);
};
