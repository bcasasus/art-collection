import { Layout } from '@rmt/layout';
import { Character, Error, Home, Results } from '@rmt/pages';

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
