import { Route, Routes } from "react-router-dom";
import Layout from "../../layout/Layout";
import Home from "../../page/Home/Home";
import About from "../../page/About/About";
import Contact from "../../page/Contact/Contact";
import Code404 from "../../page/Code404";

const Router = () => {
	return <>
		<Routes>
			<Route path={ '/' } element={<Layout />}>
				<Route index element={ <Home /> } />
				<Route path={ 'about' } element={ <About /> } />
				<Route path={ 'contact' } element={ <Contact /> } />
				<Route path={ '*' } element={ <Code404/> }/>
			</Route>
		</Routes>
	</>
};

export default Router;