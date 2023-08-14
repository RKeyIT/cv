import './normalize.css'
import './container.css'
import Header from "../markup/Header/Header";
import Footer from "../markup/Footer/Footer";
import Main from "../markup/Main/Main";

const App = () => {
	// Searching header (<h1>) will be hide
	return <>
		<h1>RKey CV</h1>
		<Header />
		<Main />
		<Footer />
	</>
}

export default App
