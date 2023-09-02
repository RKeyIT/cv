import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from 'react-router-dom'
import { FC } from "react";
// import TouchEffect from "../app/TouchEffect/TouchEffect";

const Layout: FC = () => {

	return <div id={ `TouchVisualization` }>
		{/*<TouchEffect />*/}
		<h1>RKey CV</h1>
		<Header />
		<main className={ `main` }>
			<Outlet />
		</main>
		<Footer />
	</div>
};

export default Layout;