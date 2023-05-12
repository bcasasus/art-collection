import { Outlet } from 'react-router-dom';

const Layout = (): JSX.Element => {
	return (
		<>
			<div>Header</div>
			<Outlet />
		</>
	);
};

export default Layout;
