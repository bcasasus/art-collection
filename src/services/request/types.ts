export interface Endpoints {
	[key: string]: string;
}

export interface Params {
	[key: string]: string | number;
}

export interface CallApiStructure {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	(endpoint: string, params?: Params): Promise<any>;
}

export interface CallApiFactory {
	(callApi: CallApiStructure): (
		endpoint: string
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	) => (params?: Params) => Promise<any>;
}
