import { useContext } from 'react';
import { ResultsContext } from './resultsContextProvider';
import { ResultsContextState } from './redux/types';

export const useResultsContext = (): ResultsContextState => {
	const context = useContext(ResultsContext);

	if (context === undefined) {
		throw new Error(
			'useResultsContext must be used with a ResultsContextProvider'
		);
	}

	return context as ResultsContextState;
};
