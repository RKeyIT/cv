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

export const importsV2 =
`
import sunrise from "./themes/sunrise.css?inline";
import noon from "./themes/noon.css?inline";
import sunset from "./themes/sunset.css?inline";
import moon from "./themes/moon.css?inline";
import { createContext, useContext, useState, ReactNode, FC } from "react";
`

export const contextV2 =
`
interface useThemeProps {
\ttheme: string
\tsetSunriseTheme: () => void,
\tsetNoonTheme: () => void,
\tsetSunsetTheme: () => void,
\tsetMoonTheme: () => void
}

const ThemeContext = createContext<useThemeProps>({
\tsetMoonTheme(): void {},
\tsetNoonTheme(): void {},
\tsetSunriseTheme(): void {},
\tsetSunsetTheme(): void {},
\ttheme: ""
})
`

export const useThemeV2 = `export const useTheme = () => useContext(ThemeContext)`

export const themeProviderV2 =
`
interface ThemeProviderProps {
\tchildren: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
\tconst [ theme, setTheme ] = useState(moon); // Initialize with the default theme

\tconst setSunriseTheme = () => setTheme(sunrise);
\tconst setNoonTheme = () => setTheme(noon);
\tconst setSunsetTheme = () => setTheme(sunset);
\tconst setMoonTheme = () => setTheme(moon);

\treturn (
\t\t<ThemeContext.Provider value={ { theme, setSunriseTheme, setNoonTheme, setSunsetTheme, setMoonTheme } }>
\t\t\t{ children }
\t\t</ThemeContext.Provider>
\t);
}
`

export const ThemeV2 =
`
import { useTheme } from "./ThemeContext";
import { useEffect } from "react";

const Theme = () => {
\tconst {theme
\t\t, setSunriseTheme, setNoonTheme, setSunsetTheme, setMoonTheme
\t} = useTheme()

\tuseEffect(() => {
\t\tconst hours = new Date().getHours()
\t\tif (hours >= 4 && hours < 10) setSunriseTheme()
\t\tif (hours >= 10 && hours < 16) setNoonTheme()
\t\tif (hours >= 16 && hours < 22) setSunsetTheme()
\t\tif (hours >= 22 && hours < 4) setMoonTheme()
\t}, [])

\treturn <style>{ theme }</style>
}

export default Theme
`

export const ThemeSwitcherImportsV2 =
`
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import '../animations.css'
import './themes/themes.css'
import './ThemeSwitcher.css'
import IconSunrise from "../../shared/icons/IconSunrise/IconSunrise";
import IconNoon from "../../shared/icons/IconNoon/IconNoon";
import IconSunset from "../../shared/icons/IconSunset/IconSunset";
import IconMoon from "../../shared/icons/IconMoon/IconMoon";
`

export const ThemeSwitcherComponentV2 =
`
const ThemeSwitcher = () => {
\tconst [ isDisabled, setDisabled ] = useState(false)
\tconst { theme, setSunriseTheme, setNoonTheme, setSunsetTheme, setMoonTheme } = useTheme()

\t// Button will be disabled when the user changes the theme on 1s (as like 1s of animation in animations.css)
\tuseEffect(() => {
\t\tsetDisabled(true)
\t\tsetTimeout(() => setDisabled(false), 1000)
\t}, [ theme ])

\treturn <div className="ThemeSwitcher">
\t\t<button className="theme-button" onClick={ setSunriseTheme } disabled={ isDisabled }>
\t\t\t<IconSunrise />
\t\t</button>
\t\t<button className="theme-button" onClick={ setNoonTheme } disabled={ isDisabled }>
\t\t\t<IconNoon />
\t\t</button>
\t\t<button className="theme-button" onClick={ setSunsetTheme } disabled={ isDisabled }>
\t\t\t<IconSunset />
\t\t</button>
\t\t<button className="theme-button" onClick={ setMoonTheme } disabled={ isDisabled }>
\t\t\t<IconMoon />
\t\t</button>
\t</div>
}

export default ThemeSwitcher
`