import { useCharacters } from '@rmt/hooks';
import { CardSkeleton, Filters, Card, Pagination } from '@rmt/molecules';
import { useCallback, useRef } from 'react';
import { CharacterParams } from '@rmt/services';
import './results.css';

const Results = () => {
	const { characters, charactersFetchInformation, loading, fetchCharacters } =
		useCharacters();

	const resultsMainRef = useRef<HTMLElement>(null);

	const scrollToMain = () =>
		window.scrollTo({
			top: resultsMainRef?.current?.offsetTop,
			left: 0,
			behavior: 'smooth',
		});

	const handleChangePagination = useCallback(
		async (currentPage: number) => {
			scrollToMain();
			await fetchCharacters({ page: currentPage });
		},
		[fetchCharacters]
	);

	const handleSubmitFilters = async (filters: CharacterParams) => {
		scrollToMain();
		await fetchCharacters(filters);
	};

	return (
		<div className="rmt-results-page">
			<div className="rmt-results-page__container">
				<aside className="rmt-results-page__aside">
					<Filters onSubmit={handleSubmitFilters} />
				</aside>
				<main className="rmt-results-page__main" ref={resultsMainRef}>
					<div className="rmt-results-page__results-info">
						{!loading && !characters.length ? (
							<span className="rmt-results-page__text">No results found.</span>
						) : (
							<span className="rmt-results-page__text">
								Found a total of{' '}
								{charactersFetchInformation.totalCharactersCount} characters.
							</span>
						)}
					</div>

					<ul className="rmt-results-page__list">
						{loading &&
							Array.from({ length: 20 }).map((_element, index) => (
								<li key={index} className="rmt-results-page__list-item">
									<CardSkeleton />
								</li>
							))}
						{!loading &&
							!!characters.length &&
							characters.map(({ id, image, name }) => (
								<li key={id} className="rmt-results-page__list-item">
									<Card>
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

					<Pagination
						totalPages={charactersFetchInformation.totalPages}
						onChangePage={handleChangePagination}
					/>
				</main>
			</div>
		</div>
	);
};

export default Results;
