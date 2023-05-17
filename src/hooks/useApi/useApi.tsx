import { useMemo } from 'react';
import { type ApiLogic } from './types';
import { REQUEST_ENDPOINTS, callApi, callApiFactory } from '@rmt/services';

const fetcher = callApiFactory(callApi);

export const useApi = (): ApiLogic => {
	const useApiState = useMemo(
		() => ({
			fetchCharacters: fetcher(REQUEST_ENDPOINTS.character),
		}),
		[]
	);

	return useApiState;
};
