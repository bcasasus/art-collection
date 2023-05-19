import { useEffect, useReducer } from 'react';
import { mapCharacters } from '@rmt/services';
import {
	ResultsDispatchContextProvider,
	ResultsStateContextProvider,
	resultsContextReducer,
	initialResultsStateContext,
	setResultsAction,
} from '@rmt/context';
import { api } from '@rmt/api';

const Results = () => {
	const [state, dispatch] = useReducer(
		resultsContextReducer,
		initialResultsStateContext
	);

	useEffect(() => {
		(async () => {
			const response = await api.fetchCharacters();
			const characters = mapCharacters(response);
			dispatch(setResultsAction({ results: characters }));
		})();
	}, []);

	return (
		<ResultsStateContextProvider state={state}>
			<ResultsDispatchContextProvider dispatch={dispatch}>
				<div className="results-page">Results</div>
			</ResultsDispatchContextProvider>
		</ResultsStateContextProvider>
	);
};

export default Results;
