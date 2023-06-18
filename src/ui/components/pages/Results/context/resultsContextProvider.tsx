import { ReactNode, createContext, useMemo, useReducer } from 'react';
import {
	CharactersActionPayload,
	CharactersCountActionPayload,
	FiltersActionPayload,
	IsLoadingActionPayload,
	PaginationCurrentPageActionPayload,
	PaginationTotalPagesActionPayload,
	ResultsDipatchContextState,
} from './redux/types';
import { resultsContextReducer } from './redux/reducer';
import {
	setCharactersAction,
	setCharactersCountAction,
	setFiltersAction,
	setIsLoadingAction,
	setPaginationCurrentPageAction,
	setPaginationTotalPagesAction,
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
			setCharactersCount: (payload: CharactersCountActionPayload) =>
				dispatch(setCharactersCountAction(payload)),
			setFilters: (payload: FiltersActionPayload) =>
				dispatch(setFiltersAction(payload)),
			setPaginationCurrentPage: (payload: PaginationCurrentPageActionPayload) =>
				dispatch(setPaginationCurrentPageAction(payload)),
			setPaginationTotalPages: (payload: PaginationTotalPagesActionPayload) =>
				dispatch(setPaginationTotalPagesAction(payload)),
			setIsLoading: (payload: IsLoadingActionPayload) =>
				dispatch(setIsLoadingAction(payload)),
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
