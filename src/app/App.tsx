import './normalize.css'
import './container.css'
import Header from "../markup/Header/Header";
import Footer from "../markup/Footer/Footer";
import Router from "../markup/Router/Router";

const App = () => {
	return <>
		<h1>RKey CV</h1>
		<Header />
		<Router />
		<Footer />
	</>
}

export default App
