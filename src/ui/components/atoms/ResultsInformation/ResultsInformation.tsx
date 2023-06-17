import { useCharacters } from '@rmt/hooks';
import './resultsInformation.css';

export const ResultsInformation = () => {
	const { characters, charactersFetchInformation, isLoading } = useCharacters();
	return (
		<div className="rmt-results-info">
			{!isLoading && !characters.length ? (
				<span className="rmt-results-info__text">No results found.</span>
			) : (
				<span className="rmt-results-info__text">
					Found a total of {charactersFetchInformation.totalCharactersCount}{' '}
					characters.
				</span>
			)}
		</div>
	);
};
