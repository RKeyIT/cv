import IconReact from "../../shared/IconReact/IconReact";
import './Carousel.css'
import IconSass from "../../shared/IconSass/IconSass";
import IconTS from "../../shared/IconTS/IconTS";
import IconVite from "../../shared/IconVite/IconVite";
import { useState } from "react";

const Carousel = () => {
	const [isActive, setActive] = useState(2)

	return <div className={ `Carousel` }>
		<div className="container window height">
			<div className={`slide${isActive === 1 ? ' active' : ''}`} onClick={() => setActive(1)}>
				<IconReact />
			</div>
			<div className={`slide${isActive === 2 ? ' active' : ''}`} onClick={() => setActive(2)}>
				<IconTS/>
			</div>
			<div className={`slide${isActive === 3 ? ' active' : ''}`} onClick={() => setActive(3)}>
				<IconSass />
			</div>
			<div className={`slide${isActive === 4 ? ' active' : ''}`} onClick={() => setActive(4)}>
				<IconVite />
			</div>
		</div>
	</div>
};

export default Carousel;