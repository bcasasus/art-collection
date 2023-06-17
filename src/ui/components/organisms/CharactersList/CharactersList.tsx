import { Card, CardSkeleton } from '@rmt/molecules';
import { useCharacters } from '../../hooks/useCharacters/useCharacters';
import './caractersList.css';

export const CharactersList = () => {
	const { characters, isLoading } = useCharacters();

	return (
		<ul className="rmt-characters-list">
			{isLoading &&
				Array.from({ length: 20 }).map((_element, index) => (
					<li key={index} className="rmt-characters-list__item">
						<CardSkeleton />
					</li>
				))}
			{!isLoading &&
				!!characters.length &&
				characters.map(({ id, image, name }) => (
					<li key={id} className="rmt-characters-list__item">
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
	);
};
