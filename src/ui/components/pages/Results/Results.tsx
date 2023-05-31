import { useCharacters } from '@rmt/hooks';
import { CardSkeleton, Filters, Card, Pagination } from '@rmt/molecules';
import './results.css';

const Results = () => {
	const { characters, totalCharactersCount, loading, fetchCharacters } =
		useCharacters();

	return (
		<div className="rmt-results-page">
			<div className="rmt-results-page__container">
				<aside className="rmt-results-page__aside">
					<Filters fetchCharacters={fetchCharacters} />
				</aside>
				<main className="rmt-results-page__main">
					<div className="rmt-results-page__results-info">
						{!loading && !characters.length ? (
							<span className="rmt-results-page__text">No results found.</span>
						) : (
							<span className="rmt-results-page__text">
								Found a total of {totalCharactersCount} characters.
							</span>
						)}
					</div>

					<ul className="rmt-results-page__list">
						{loading &&
							Array.from({ length: 20 }).map((_element, index) => (
								<li className="rmt-results-page__list-item">
									<CardSkeleton key={index} />
								</li>
							))}
						{!loading &&
							!!characters.length &&
							characters.map(({ id, image, name }) => (
								<li className="rmt-results-page__list-item">
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
								</li>
							))}
					</ul>
					<Pagination />
				</main>
			</div>
		</div>
	);
};

export default Results;
