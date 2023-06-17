import { ReactNode, createContext, useMemo, useReducer } from 'react';
import {
	CharactersActionPayload,
	FiltersActionPayload,
	PaginationActionPayload,
	ResultsDipatchContextState,
} from './redux/types';
import { resultsContextReducer } from './redux/reducer';
import {
	setCharactersAction,
	setFiltersAction,
	setPaginationAction,
} from './redux/action';
import {
	initialResultsContext,
	initialResultsDispatchContext,
} from './redux/state';

export const ResultsContext = createContext(initialResultsContext);

export const ResultsDispatchContext = createContext(
	initialResultsDispatchContext
);

export const ResultsContextProvider = ({
	children,
}: ResultsContextProviderProps) => {
	const [resultsContext, dispatch] = useReducer(
		resultsContextReducer,
		initialResultsContext
	);

	const resultsDispatchContext: ResultsDipatchContextState = useMemo(
		() => ({
			setCharacters: (payload: CharactersActionPayload) =>
				dispatch(setCharactersAction(payload)),
			setFilters: (payload: FiltersActionPayload) =>
				dispatch(setFiltersAction(payload)),
			setPagination: (payload: PaginationActionPayload) =>
				dispatch(setPaginationAction(payload)),
		}),
		[dispatch]
	);

	return (
		<ResultsContext.Provider value={resultsContext}>
			<ResultsDispatchContext.Provider value={resultsDispatchContext}>
				{children}
			</ResultsDispatchContext.Provider>
		</ResultsContext.Provider>
	);
};

type ResultsContextProviderProps = {
	children: ReactNode;
};
