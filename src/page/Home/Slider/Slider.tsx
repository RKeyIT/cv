import IconReact from "../../../shared/icons/IconReact/IconReact";
import './Slider.css'
import IconSass from "../../../shared/icons/IconSass/IconSass";
import IconTS from "../../../shared/icons/IconTS/IconTS";
import IconVite from "../../../shared/icons/IconVite/IconVite";
import { useState, useEffect } from "react";
// import Card from "./Card/Card";

type Slide = 1 | 2 | 3 | 4

const Slider = () => {
	const [ active, setActive ] = useState<Slide>(1)

	useEffect(() => {
		const timer = 2000
		// TODO: Dangerous type assertion using "as" syntax.
		const interval = setInterval(() => setActive((prev): Slide => (prev + 1) as Slide), timer)
		if (active > 4) {
			setActive(1)
			clearInterval(interval)
		}
		return () => clearInterval(interval)
	}, [ active ])

	// TODO: Refactor slider to more smooth and create Card component that contains background and received technology.

	return <div className={ `Slider` }>
			<div className="container height padding">
				<h2>Used technologies</h2>
				{/*<Card />*/}
				<div className="window">
					<div className={ `slide${ active === 1 ? ' active' : '' }` }>
						<IconReact />
					</div>
					<div className={ `slide${ active === 2 ? ' active' : '' }` }>
						<IconTS />
					</div>
					<div className={ `slide${ active === 3 ? ' active' : '' }` }>
						<IconSass />
					</div>
					<div className={ `slide${ active === 4 ? ' active' : '' }` }>
						<IconVite />
					</div>
				</div>
			</div>
	</div>
};

export default Slider;