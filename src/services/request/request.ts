import { CallApiFactory, CallApiStructure, Params } from './types';

const objectParamsToQueryParams =
	(params: Params) =>
	(querParams: string, paramKey: string, index: number): string => {
		if (index === 0) {
			querParams = querParams.concat('?');
		} else {
			querParams = querParams.concat('&');
		}

		const paramValue = params[paramKey];

		return querParams.concat(`${paramKey}=${paramValue}`);
	};

const QUERY_PARAMS_INITIAL_STATE = '';

const buildQueryParams = (params: Params): string => {
	if (typeof params !== 'object' || params === null || Array.isArray(params)) {
		throw new Error('Params must be an object.');
	}

	const paramsKeys = Object.keys(params);
	const querParams = paramsKeys.reduce(
		objectParamsToQueryParams(params),
		QUERY_PARAMS_INITIAL_STATE
	);

	return querParams;
};

const buildUrl = (endpoint: string, params: Params): string => {
	if (!endpoint) {
		throw new Error('Endpoint must be a string and must not be empty.');
	}

	const queryParams = buildQueryParams(params);
	const url = endpoint.concat(queryParams);

	return url;
};

export const callApi: CallApiStructure = async (endpoint = '', params = {}) => {
	const apiUrl = buildUrl(endpoint, params);
	const response = await fetch(apiUrl);
	const data = response.json();

	return data;
};

export const callApiFactory: CallApiFactory =
	(callApi) => (endpoint) => (params) =>
		callApi(endpoint, params);
