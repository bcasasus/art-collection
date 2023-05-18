import {
	type CallApiFactory,
	type CallApiStructure,
	type Params,
} from './types';

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

const buildUrl = (apiUrl: string, endpoint: string, params: Params): string => {
	if (!endpoint) {
		throw new Error('Endpoint must not be empty.');
	}

	const queryParams = buildQueryParams(params);
	const endpointWithQueryParams = endpoint.concat(queryParams);
	const url = apiUrl.concat(endpointWithQueryParams);

	return url;
};

export const callApi: CallApiStructure = async (
	apiUrl,
	endpoint,
	params = {}
) => {
	if (!apiUrl) {
		throw new Error('ApiUrl must not be empty.');
	}
	const url = buildUrl(apiUrl, endpoint, params);
	const response = await fetch(url);
	const data = response.json();

	return data;
};

export const callApiFactory: CallApiFactory =
	(apiUrl, callApi) => (endpoint) => (params) =>
		callApi(apiUrl, endpoint, params);
