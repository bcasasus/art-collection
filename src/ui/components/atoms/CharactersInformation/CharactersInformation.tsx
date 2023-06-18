import { useResultsContext } from '../../pages/Results/context/useResultsContext';
import './charactersInformation.css';

export const CharactersInformation = () => {
	const { characters, charactersCount, isLoading } = useResultsContext();
	return (
		<div className="rmt-characters-info">
			{!isLoading && !characters.length ? (
				<span className="rmt-characters-info__text">No results found.</span>
			) : (
				<span className="rmt-characters-info__text">
					Found a total of {charactersCount} characters.
				</span>
			)}
		</div>
	);
};
