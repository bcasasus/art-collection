import { Layout } from '../ui/components/Layout';
import { Character, Error, Home, Results } from '../ui/components/pages';

const routes = [
	{
		path: '/',
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				errorElement: <Error />,
				children: [
					{ index: true, element: <Home /> },
					{
						path: 'results',
						element: <Results />,
					},
					{
						path: 'character/:id',
						element: <Character />,
					},
				],
			},
		],
	},
];

export default routes;
