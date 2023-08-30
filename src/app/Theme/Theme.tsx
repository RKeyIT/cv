import { useTheme } from "./ThemeContext";
import { useEffect } from "react";

const Theme = () => {
	const {theme
		, setSunriseTheme, setNoonTheme, setSunsetTheme, setMoonTheme
	} = useTheme()

	useEffect(() => {
		const hours = new Date().getHours()
		if (hours >= 4 && hours < 10) setSunriseTheme()
		if (hours >= 10 && hours < 16) setNoonTheme()
		if (hours >= 16 && hours < 22) setSunsetTheme()
		if (hours >= 22 && hours < 4) setMoonTheme()
	}, [])

	return <style>{ theme }</style>
}

export default Theme