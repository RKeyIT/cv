import { useState, useEffect } from "react";
import './themes/animations.css'
import './themes/general.css'
import sunrise from "./themes/sunrise.css?inline";
import noon from "./themes/noon.css?inline";
import sunset from "./themes/sunset.css?inline";
import moon from "./themes/moon.css?inline";

const ThemePicker = () => {
	const [theme, setTheme] = useState(noon)

	const sunriseTheme = () => setTheme(sunrise)
	const noonTheme = () => setTheme(noon)
	const sunsetTheme = () => setTheme(sunset)
	const moonTheme = () => setTheme(moon)

	useEffect(() => {
		const hours = new Date().getHours()
		if (hours >= 22 && hours < 4) setTheme(moon)
		if (hours >= 4 && hours < 10) setTheme(sunrise)
		if (hours >= 10 && hours < 16) setTheme(noon)
		if (hours >= 16 && hours < 22) setTheme(sunset)
	}, [])

	return <>
		<style>{theme}</style>
		{/*<button onClick={changeTheme}>Auto</button>*/}
		<button onClick={sunriseTheme}>Sunrise</button>
		<button onClick={noonTheme}>Noon</button>
		<button onClick={sunsetTheme}>Sunset</button>
		<button onClick={moonTheme}>Moon</button>
	</>
}

export default ThemePicker