import IconReact from "../../shared/IconReact/IconReact";
import './Carousel.css'
import IconSass from "../../shared/IconSass/IconSass";
import IconTS from "../../shared/IconTS/IconTS";
import IconVite from "../../shared/IconVite/IconVite";
import { useState, useEffect } from "react";

type slide = 1 | 2 | 3 | 4
type direction = 1 | -1

const Carousel = () => {
	const [active, setActive] = useState<slide>(1)
	const [carouselDirection, setCarouselDirection] = useState<direction>(1)

	useEffect(() => {
		if(active === 2) setCarouselDirection(1)
		if(active === 3) setCarouselDirection(-1)
		// TODO: Dangerous type assertion using "as" syntax
		setTimeout(() => setActive((prev): slide => (prev + carouselDirection) as slide), 2000)
	}, [active])

	return <div className={ `Carousel` }>
		<div className="container window height">
			<div className={`slide${active === 1 ? ' active' : ''}`} onClick={() => setActive(1)}>
				<IconReact />
			</div>
			<div className={`slide${active === 2 ? ' active' : ''}`} onClick={() => setActive(2)}>
				<IconTS/>
			</div>
			<div className={`slide${active === 3 ? ' active' : ''}`} onClick={() => setActive(3)}>
				<IconSass />
			</div>
			<div className={`slide${active === 4 ? ' active' : ''}`} onClick={() => setActive(4)}>
				<IconVite />
			</div>
		</div>
	</div>
};

export default Carousel;