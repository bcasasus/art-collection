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
			<ResultsDispatchContextProvider dispatch={dispatch}>
				<div className="rmt-results-page">
					<aside className="rmt-results-page__aside"></aside>
					<main className="rmt-results-page__main">
						{state.results.map(({ id, image, name }) => (
							<Card key={id}>
								<Card.Body>
									<Card.Image src={image} alt={`A portrait of${name}`} />
								</Card.Body>
								<Card.Header>
									<Card.Title>{name}</Card.Title>
								</Card.Header>
							</Card>
						))}
					</main>
				</div>
			</ResultsDispatchContextProvider>
		</ResultsStateContextProvider>
	);
};

export default Results;
