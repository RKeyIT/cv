export const states =
`const [ theme, setTheme ] = useState(sunrise)
const [ isDisabled, setDisabled ] = useState(false)

const sunriseTheme = () => setTheme(sunrise)
const noonTheme = () => setTheme(noon)
const sunsetTheme = () => setTheme(sunset)
const moonTheme = () => setTheme(moon)`

export const effects =
`useEffect(() => {
	setDisabled(true)
	setTimeout(() => setDisabled(false), 1000)
}, [ theme ])

// Automatically set the theme based on the current time
useEffect(() => {
	const hours = new Date().getHours()
	if (hours >= 22 && hours < 4) setTheme(moon)
	if (hours >= 4 && hours < 10) setTheme(sunrise)
	if (hours >= 10 && hours < 16) setTheme(noon)
	if (hours >= 16 && hours < 22) setTheme(sunset)
}, [])`

export const markup =
`<div className="theme-picker">
	<style>{ theme }</style>
	<button className="theme-button" onClick={ sunriseTheme } disabled={ isDisabled }>
		<IconSunrise />
	</button>
	<button className="theme-button" onClick={ noonTheme } disabled={ isDisabled }>
		<IconNoon />
	</button>
	<button className="theme-button" onClick={ sunsetTheme } disabled={ isDisabled }>
		<IconSunset />
	</button>
	<button className="theme-button" onClick={ moonTheme } disabled={ isDisabled }>
		<IconMoon />
	</button>
</div>`

export const imports =
`import sunrise from "./themes/sunrise.css?inline";
import noon from "./themes/noon.css?inline";
import sunset from "./themes/sunset.css?inline";
import moon from "./themes/moon.css?inline";`