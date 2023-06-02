import { useCallback, useEffect, useState } from 'react';
import { api } from '@rmt/api';
import { CharacterParams, mapCharacters } from '@rmt/services';
import { Character, CharactersFetchInformation } from '@rmt/model';

const CHARACTER_RESULTS_INFORMATION_INITIAL_STATE = {
	totalPages: 0,
	totalCharactersCount: 0,
};

export const useCharacters = () => {
	const [characters, setCharacters] = useState<Character[]>([]);
	const [charactersFetchInformation, setCharactersFetchInformation] =
		useState<CharactersFetchInformation>(
			CHARACTER_RESULTS_INFORMATION_INITIAL_STATE
		);
	const [loading, setLoading] = useState<boolean>(true);

	const fetchCharacters = useCallback(async (params: CharacterParams) => {
		try {
			setLoading(true);
			const response = await api.fetchCharacters(params);
			const characters = mapCharacters(response);

			setCharacters(characters.results);
			setCharactersFetchInformation(characters.resultsInfo);
			setLoading(false);
		} catch {
			setCharacters([]);
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		(async () => {
			await fetchCharacters({});
		})();
	}, [fetchCharacters]);

	return {
		characters,
		charactersFetchInformation,
		loading,
		fetchCharacters,
	};
};
