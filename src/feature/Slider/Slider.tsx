import IconReact from "../../shared/IconReact/IconReact";
import './Slider.css'
import IconSass from "../../shared/IconSass/IconSass";
import IconTS from "../../shared/IconTS/IconTS";
import IconVite from "../../shared/IconVite/IconVite";
import { useState, useEffect } from "react";

type Slide = 1 | 2 | 3 | 4

const Slider = () => {
	const [active, setActive] = useState<Slide>(1)

	useEffect(() => {
		const timer = 2 * 1000
		// TODO: Dangerous type assertion using "as" syntax
		const interval = setInterval(() => setActive((prev): Slide => (prev + 1) as Slide), timer)
		if(active > 4) {
			setActive(1)
			clearInterval(interval)
		}
		return () => clearInterval(interval)
	}, [active])

	return <div className={ `Carousel` }>
		<div className="container window height">
			<div className={`slide${active === 1 ? ' active' : ''}`}>
				<IconReact />
			</div>
			<div className={`slide${active === 2 ? ' active' : ''}`}>
				<IconTS/>
			</div>
			<div className={`slide${active === 3 ? ' active' : ''}`}>
				<IconSass />
			</div>
			<div className={`slide${active === 4 ? ' active' : ''}`}>
				<IconVite />
			</div>
		</div>
	</div>
};

export default Slider;