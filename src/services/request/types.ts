export interface Endpoints {
	[key: string]: string;
}

export interface CharacterFilters {
	name?: string;
	status?: string;
	gender?: string;
}

export type CharacterParams = {
	[key in keyof CharacterFilters as string]?: string | number;
};

export type ParamsStructure = {
	[key: string]: string | number;
};

export type Params = Partial<ParamsStructure>;

export type ParamsKeys = keyof ParamsStructure;

export interface CallApiStructure {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	(apiUrl: string, endpoint: string, params?: Params): Promise<any>;
}

export interface CallApiFactory {
	(apiUrl: string, callApi: CallApiStructure): (
		endpoint: string
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	) => (params?: Params) => Promise<any>;
}
