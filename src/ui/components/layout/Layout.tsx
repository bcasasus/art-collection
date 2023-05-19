import { Outlet } from 'react-router-dom';
import { Header } from '@rmt/organisms';

const Layout = (): JSX.Element => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default Layout;
