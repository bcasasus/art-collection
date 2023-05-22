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
import { Card } from '@rmt/atoms';
import { CardSkeleton } from '@rmt/molecules';
import './results.css';
import Filters from '../../molecules/Filters/Filters';

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
			<div className="rmt-results-page">
				<div className="rmt-results-page__container">
					<ResultsDispatchContextProvider dispatch={dispatch}>
						<aside className="rmt-results-page__aside">
							<Filters />
						</aside>
					</ResultsDispatchContextProvider>
					<main className="rmt-results-page__main">
						<ul className="rmt-results-page__list">
							{!state.results.length &&
								Array.from({ length: 20 }).map((_element, index) => (
									<li className="rmt-results-page__list-item">
										<CardSkeleton key={index} />
									</li>
								))}
							{state.results.length
								? state.results.map(({ id, image, name }) => (
										<li className="rmt-results-page__list-item">
											<Card key={id}>
												<Card.Body>
													<figure className="rmt-card__media">
														<Card.Image
															src={image}
															alt={`A portrait of ${name} from Rick and Morty.`}
														/>
													</figure>
												</Card.Body>
												<Card.Header>
													<Card.Title>{name}</Card.Title>
												</Card.Header>
											</Card>
										</li>
								  ))
								: null}
						</ul>
					</main>
				</div>
			</div>
		</ResultsStateContextProvider>
	);
};

export default Results;
