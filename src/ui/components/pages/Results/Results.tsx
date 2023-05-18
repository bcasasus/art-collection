import { useEffect, useReducer } from 'react';
import { useApi } from '../../../../hooks/useApi/useApi';
import { mapCharacters } from '@rmt/services';
import {
	ResultsDispatchContextProvider,
	ResultsStateContextProvider,
	initialResultsStateContext,
	setResultsAction,
} from '@rmt/context';
import { resultsContextReducer } from '@rmt/context';

const Results = () => {
	const [state, dispatch] = useReducer(
		resultsContextReducer,
		initialResultsStateContext
	);
	const { fetchCharacters } = useApi();
	useEffect(() => {
		(async () => {
			const response = await fetchCharacters();
			const characters = mapCharacters(response);
			dispatch(setResultsAction({ results: characters }));
		})();
	}, [fetchCharacters]);

	return (
		<ResultsStateContextProvider state={state}>
			<ResultsDispatchContextProvider dispatch={dispatch}>
				<div className="results-page"></div>
			</ResultsDispatchContextProvider>
		</ResultsStateContextProvider>
	);
};

export default Results;
