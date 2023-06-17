import { useCallback, useEffect, useState } from 'react';
import { api } from '@rmt/api';
import { CharacterParams, mapCharacters } from '@rmt/services';
import { CharactersFetchInformation } from '@rmt/model';
import { useResultsContext } from '../../pages/Results/context/useResultsContext';
import { useResultsDispatchContext } from '../../pages/Results/context/useResultsDispatchContext';

const CHARACTER_RESULTS_INFORMATION_INITIAL_STATE = {
	totalPages: 0,
	totalCharactersCount: 0,
};

export const useCharacters = () => {
	// const [characters, setCharacters] = useState<Character[]>([]);
	const { characters } = useResultsContext();
	const { setCharacters } = useResultsDispatchContext();
	const [charactersFetchInformation, setCharactersFetchInformation] =
		useState<CharactersFetchInformation>(
			CHARACTER_RESULTS_INFORMATION_INITIAL_STATE
		);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const fetchCharacters = useCallback(
		async (params: CharacterParams) => {
			try {
				setIsLoading(true);
				const response = await api.fetchCharacters(params);
				const characters = mapCharacters(response);

				setCharacters({ characters: characters.results });
				setCharactersFetchInformation(characters.resultsInfo);
				setIsLoading(false);
			} catch {
				setIsLoading(false);
			}
		},
		[setCharacters]
	);

	useEffect(() => {
		(async () => {
			await fetchCharacters({});
		})();
	}, [fetchCharacters]);

	return {
		characters,
		charactersFetchInformation,
		isLoading,
		fetchCharacters,
	};
};
