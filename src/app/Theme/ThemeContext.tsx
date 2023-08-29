import sunrise from "./themes/sunrise.css?inline";
import noon from "./themes/noon.css?inline";
import sunset from "./themes/sunset.css?inline";
import moon from "./themes/moon.css?inline";
import { createContext, useContext, useState, ReactNode, FC } from "react";

interface useThemeProps {
	theme: string
	setSunriseTheme: () => void,
	setNoonTheme: () => void,
	setSunsetTheme: () => void,
	setMoonTheme: () => void
}
const ThemeContext = createContext<useThemeProps>({
	setMoonTheme(): void {
	}, setNoonTheme(): void {
	}, setSunriseTheme(): void {
	}, setSunsetTheme(): void {
	}, theme: ""
})

export const useTheme = () => useContext(ThemeContext)

interface ThemeProviderProps {
	children: ReactNode
}
export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState(moon); // Initialize with the default theme

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