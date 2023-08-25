import './normalize.css'
import './container.css'
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Main from "../layout/Main/Main";
import { Routes, Route } from 'react-router-dom'
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";
import Code404 from "../page/Code404";

const App = () => {


	return <>
		<h1>RKey CV</h1>
		<Header />
		<main className={ `main` }>
			<Routes>
				<Route path={ '/' }>
					<Route index element={ <Home /> } />
					<Route path={ 'about' } element={ <About /> } />
					<Route path={ 'contact' } element={ <Contact /> } />
					<Route path={ '*' } element={ <Code404 /> } />
				</Route>
			</Routes>
			<Main />
		</main>
		<Footer />
	</>
}

export default App
