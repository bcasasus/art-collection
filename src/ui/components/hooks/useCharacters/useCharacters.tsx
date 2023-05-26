import { useEffect, useState } from 'react';
import { api } from '@rmt/api';
import { mapCharacters } from '@rmt/services';
import { Character } from '@rmt/model';

export const useCharacters = () => {
	const [characters, setCharacters] = useState<Character[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const response = await api.fetchCharacters();
			const characters = mapCharacters(response);
			setCharacters(characters);
			setLoading(false);
		})();
	}, []);
	return { characters, loading };
};
