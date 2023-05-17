import { ReactNode, useEffect } from 'react';
import { useApi } from '../../../../hooks/useApi/useApi';
import { mapCharacters } from '@rmt/services';
import { useResultsDispatchContext } from '@rmt/context';

interface ResultsProps {
	children: ReactNode;
}

const Results = ({ children }: ResultsProps) => {
	const { fetchCharacters } = useApi();
	const { setResults } = useResultsDispatchContext();

	useEffect(() => {
		(async () => {
			const response = await fetchCharacters();
			const characters = mapCharacters(response);
			setResults({ results: characters });
		})();
	}, [fetchCharacters, setResults]);

	return <div className="results-page">{children}</div>;
};

export default Results;
