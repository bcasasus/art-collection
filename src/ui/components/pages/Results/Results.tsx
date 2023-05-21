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
				<ResultsDispatchContextProvider dispatch={dispatch}>
					<aside className="rmt-results-page__aside">Filters</aside>
				</ResultsDispatchContextProvider>
				<main className="rmt-results-page__main">
					{!state.results.length &&
						Array.from({ length: 20 }).map((_element, index) => (
							<CardSkeleton key={index} />
						))}
					{state.results.length
						? state.results.map(({ id, image, name }) => (
								<Card key={id}>
									<Card.Body>
										<Card.Image
											src={image}
											alt={`A portrait of ${name} from Rick and Morty.`}
										/>
									</Card.Body>
									<Card.Header>
										<Card.Title>{name}</Card.Title>
									</Card.Header>
								</Card>
						  ))
						: null}
				</main>
			</div>
		</ResultsStateContextProvider>
	);
};

export default Results;
