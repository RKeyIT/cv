import sunrise from "./themes/sunrise.css?inline";
import noon from "./themes/noon.css?inline";
import sunset from "./themes/sunset.css?inline";
import moon from "./themes/moon.css?inline";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({  })
export const useTheme = () => useContext(ThemeContext)

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(sunrise); // Initialize with the default theme

	const setSunriseTheme = () => setTheme(sunrise);
	const setNoonTheme = () => setTheme(noon);
	const setSunsetTheme = () => setTheme(sunset);
	const setMoonTheme = () => setTheme(moon);

	return (
		<ThemeContext.Provider value={{ theme, setSunriseTheme, setNoonTheme, setSunsetTheme, setMoonTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}