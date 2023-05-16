import { ResultsContextProvider } from '@rmt/context';
import Results from './Results';

const ResultsContainer = () => {
	return (
		<ResultsContextProvider>
			<Results />
		</ResultsContextProvider>
	);
};

export default ResultsContainer;
