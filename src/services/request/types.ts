export interface Endpoints {
	[key: string]: string;
}

export interface CharacterParams {
	name?: string;
	status?: string;
	species?: string;
	type?: string;
	gender?: string;
}

export type Params = {
	[key in keyof CharacterParams]?: string | number;
};

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
