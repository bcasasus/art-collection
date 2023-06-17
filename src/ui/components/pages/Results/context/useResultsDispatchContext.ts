import { useContext } from 'react';
import { ResultsDispatchContext } from './resultsContextProvider';
import { ResultsDipatchContextState } from './redux/types';

export const useResultsDispatchContext = (): ResultsDipatchContextState => {
	const context = useContext(ResultsDispatchContext);

	if (context === undefined) {
		throw new Error(
			'useResultsContext must be used with a ResultsContextProvider'
		);
	}

	return context as ResultsDipatchContextState;
};
