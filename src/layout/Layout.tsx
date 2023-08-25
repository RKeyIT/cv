import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return <>
		<h1>RKey CV</h1>
		<Header />
		<main className={ `main` }>
			<Outlet />
		</main>
		<Footer />
	</>
};

export default Layout;