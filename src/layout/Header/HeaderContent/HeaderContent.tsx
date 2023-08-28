import './HeaderContent.css'
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type Header = `Home` | `About me` | `Contact` | string

const HeaderContent: FC = () => {
	const location = useLocation().pathname
	const [ header, setHeader ] = useState<Header>(`Home`)
	const [ isAnimated, setAnimated ] = useState(false)

	useEffect(() => {
		switch (location) {
			case `/`:
				setHeader(`Home`)
				break
			case `/about`:
				setHeader(`About me`)
				break
			case `/contact`:
				setHeader(`Contact`)
				break
			default:
				setHeader(location)
		}

		setAnimated(true)
		const animate = setTimeout(() => {setAnimated(false)}, 2000)

		return () => {
			setAnimated(false)
			clearTimeout(animate)
		}
	}, [ location ])


	return <div className="HeaderContent">
		<h2 className={`header${isAnimated ? ' animate' : ``}`}>
			{ header }
		</h2>
	</div>
};

export default HeaderContent;
