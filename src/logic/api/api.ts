import { REQUEST_ENDPOINTS, callApi, callApiFactory } from '@rmt/services';
import { type ApiStructure } from './types';

const API_URL = import.meta.env.VITE_API_URL || '';

const fetcher = callApiFactory(API_URL, callApi);

export const api: ApiStructure = {
	fetchCharacters: fetcher(REQUEST_ENDPOINTS.character),
};
