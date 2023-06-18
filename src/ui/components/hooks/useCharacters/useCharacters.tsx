import { useCallback } from 'react';
import { api } from '@rmt/api';
import { CharacterParams, mapCharacters } from '@rmt/services';
import { useResultsDispatchContext } from '../../pages/Results/context/useResultsDispatchContext';

export const useCharacters = () => {
	const {
		setCharacters,
		setCharactersCount,
		setPaginationTotalPages,
		setIsLoading,
	} = useResultsDispatchContext();

	const fetchCharacters = useCallback(
		async (params: CharacterParams) => {
			try {
				setIsLoading({ isLoading: true });

				const response = await api.fetchCharacters(params);
				const characters = mapCharacters(response);

				setCharacters({ characters: characters.results });
				setCharactersCount({
					charactersCount: characters.resultsInfo.totalCharactersCount,
				});
				setPaginationTotalPages({
					totalPages: characters.resultsInfo.totalPages,
				});
				setIsLoading({ isLoading: false });
			} catch {
				setCharacters({ characters: [] });
				setIsLoading({ isLoading: false });
			}
		},
		[setCharacters, setCharactersCount, setPaginationTotalPages, setIsLoading]
	);

	return {
		fetchCharacters,
	};
};
