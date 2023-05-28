import { useEffect, useState } from 'react';
import { api } from '@rmt/api';
import { CharacterParams, mapCharacters } from '@rmt/services';
import { Character } from '@rmt/model';

export const useCharacters = () => {
	const [characters, setCharacters] = useState<Character[]>([]);
	const [loading, setLoading] = useState(true);

	const fetchCharacters = async (params: CharacterParams) => {
		try {
			setLoading(true);
			const response = await api.fetchCharacters(params);
			const characters = mapCharacters(response);
			setCharacters(characters);
			setLoading(false);
		} catch {
			setCharacters([]);
			setLoading(false);
		}
	};

	useEffect(() => {
		(async () => {
			await fetchCharacters({});
		})();
	}, []);
	return { characters, loading, fetchCharacters };
};
