// import { useState, useEffect, MouseEventHandler } from "react";
// import SUNRISE from "./themes/sunrise.css?inline";
// import NOON from "./themes/noon.css?inline";
// import SUNSET from "./themes/sunset.css?inline";
// import MOON from "./themes/moon.css?inline";
//
// type ThemeCSS = SUNRISE | NOON | SUNSET | MOON
// type ThemeName = 'SUNRISE' | 'NOON' | 'SUNSET' | 'MOON'
// type ThemeHandler = MouseEventHandler<HTMLButtonElement>
//
//
// // TODO: Variables from this hook didnt work in App.tsx but works in ThemePicker.tsx
// const useTheme = () => {
// 	const [themeCSS, setThemeCSS] = useState<ThemeCSS>(SUNRISE);
// 	const [themeName, setThemeName] = useState<ThemeName>('SUNRISE')
//
// 	const sunrise: ThemeHandler = () => {
// 		setThemeName('SUNRISE')
// 		setThemeCSS(SUNRISE)
// 	}
// 	const noon: ThemeHandler = () => {
// 		setThemeName('NOON')
// 		setThemeCSS(NOON)
// 	}
// 	const sunset: ThemeHandler = () => {
// 		setThemeName('SUNSET')
// 		setThemeCSS(SUNSET)
// 	}
// 	const moon: ThemeHandler = () => {
// 		setThemeName('MOON')
// 		setThemeCSS(MOON)
// 	}
//
// 	// Automatically set the theme based on the current time
// 	useEffect(() => {
// 		const hours = new Date().getHours()
// 		if (hours >= 22 && hours < 4) setThemeCSS(MOON)
// 		if (hours >= 4 && hours < 10) setThemeCSS(SUNRISE)
// 		if (hours >= 10 && hours < 16) setThemeCSS(NOON)
// 		if (hours >= 16 && hours < 22) setThemeCSS(SUNSET)
// 	}, [])
//
// 	const themeHandlers = { sunrise, noon, sunset, moon }
//
// 	return [themeName, themeHandlers, themeCSS]
// };
//
// export default useTheme;