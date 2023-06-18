import { CharactersPagination, Filters } from '@rmt/molecules';
import { CharactersInformation } from '@rmt/atoms';
import { ResultsContextProvider } from './context/resultsContextProvider';
import { CharactersList } from '../../organisms/CharactersList/CharactersList';
import './results.css';

const Results = () => {
	return (
		<ResultsContextProvider>
			<div className="rmt-results-page">
				<div className="rmt-results-page__container">
					<aside className="rmt-results-page__aside">
						<Filters />
					</aside>
					<main className="rmt-results-page__main">
						<CharactersInformation />
						<CharactersList />
						<CharactersPagination />
					</main>
				</div>
			</div>
		</ResultsContextProvider>
	);
};

export default Results;
