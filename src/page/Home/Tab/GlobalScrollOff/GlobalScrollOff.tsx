import { useEffect } from "react";

const GlobalScrollOff = () => {
	useEffect(() => {
		const style = document.createElement("style");
		style.innerHTML = `
		html {
			overflow: hidden
		}`
		document.head.appendChild(style)

		return () => {
			document.head.removeChild(style)
		}
	}, [])

	return null
}

export default GlobalScrollOff