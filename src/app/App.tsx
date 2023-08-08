import './normalize.css'
import './container.css'
import './medias.css'
import Header from "../markup/Header/Header";
import Footer from "../markup/Footer/Footer";

const App = () => {
	// Searching header (<h1>) will be hide
	return <>
		<h1>RKey CV</h1>
		<Header />

		<Footer />
	</>
}

export default App
