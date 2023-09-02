import { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import '../animations.css'
import './themes/themes.css'
import './ThemeSwitcher.css'
import IconSunrise from "../../shared/icons/IconSunrise/IconSunrise";
import IconNoon from "../../shared/icons/IconNoon/IconNoon";
import IconSunset from "../../shared/icons/IconSunset/IconSunset";
import IconMoon from "../../shared/icons/IconMoon/IconMoon";

const ThemeSwitcher = () => {
	const [ isDisabled, setDisabled ] = useState(false)
	const { theme, setSunriseTheme, setNoonTheme, setSunsetTheme, setMoonTheme } = useTheme()

	// Button will be disabled when the user changes the theme on 1s (as like 1s of animation in animations.css)
	useEffect(() => {
		setDisabled(true)
		setTimeout(() => setDisabled(false), 1000)
	}, [ theme ])

	return <div className="ThemeSwitcher">
		<button className="theme-button" onClick={ setSunriseTheme } disabled={ isDisabled }>
			<IconSunrise />
		</button>
		<button className="theme-button" onClick={ setNoonTheme } disabled={ isDisabled }>
			<IconNoon />
		</button>
		<button className="theme-button" onClick={ setSunsetTheme } disabled={ isDisabled }>
			<IconSunset />
		</button>
		<button className="theme-button" onClick={ setMoonTheme } disabled={ isDisabled }>
			<IconMoon />
		</button>
	</div>
}

export default ThemeSwitcher
