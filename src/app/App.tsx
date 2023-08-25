import './normalize.css'
import './container.css'
import { Routes, Route } from 'react-router-dom'
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";
import Code404 from "../page/Code404";
import Layout from "../layout/Layout";

const App = () => {


	return <>
		<Routes>
			<Route path={ '/' } element={<Layout />}>
				<Route index element={ <Home /> } />
				<Route path={ 'about' } element={ <About /> } />
				<Route path={ 'contact' } element={ <Contact /> } />
				<Route path={ '*' } element={ <Code404 /> } />
			</Route>
		</Routes>
	</>
}

export default App
