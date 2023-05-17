import { ResultsContextProvider } from '@rmt/context';

const ResultsContainer = () => {
	return (
		<ResultsContextProvider>
			<div>Results container</div>
		</ResultsContextProvider>
	);
};

export default ResultsContainer;
