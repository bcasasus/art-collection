import React, { useMemo, useReducer } from 'react';
import { ResultsContextDispatch, ResultsContextState } from './redux/types';
import {
	resultsContextDispatcherFactory,
	resultsContextReducer,
} from './redux/reducer';
import { setResultsAction } from './redux/action';

const initialResultsStateContext: ResultsContextState = {
	results: [],
};
const initialResultsDispatchContext: ResultsContextDispatch = {
	setResults: () => null,
};

export const ResultsStateContext = React.createContext<ResultsContextState>(
	initialResultsStateContext
);
export const ResultsDispatchContext =
	React.createContext<ResultsContextDispatch>(initialResultsDispatchContext);

export const ResultsContextProvider = ({
	children,
}: React.PropsWithChildren) => {
	const [state, dispatch] = useReducer(
		resultsContextReducer,
		initialResultsStateContext
	);

	const dispatcher = resultsContextDispatcherFactory(dispatch);

	const resultsStateContextValue = state;
	const resultsDispatchContextValue: ResultsContextDispatch = useMemo(
		() => ({
			setResults: dispatcher(setResultsAction),
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[dispatch]
	);

	return (
		<ResultsStateContext.Provider value={resultsStateContextValue}>
			<ResultsDispatchContext.Provider value={resultsDispatchContextValue}>
				{children}
			</ResultsDispatchContext.Provider>
		</ResultsStateContext.Provider>
	);
};
