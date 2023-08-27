import './normalize.css'
import './container.css'
import Router from "./Router/Router";
import Theme from "./Theme/Theme";
import { ThemeProvider } from "./Theme/ThemeContext";


const App = () => {
	return <ThemeProvider>
		<Theme />
		<Router />
	</ThemeProvider>
}

export default App
