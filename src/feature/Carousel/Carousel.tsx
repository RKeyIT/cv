import IconReact from "../../shared/IconReact/IconReact";
import './Carousel.css'

const Carousel = () => {
	return <div className={ `Carousel` }>
		<div className="container window height">
			<div className="slide">
				<IconReact />
			</div>
			<div className="slide">TS</div>
			<div className="slide active">SASS</div>
			<div className="slide">VITE</div>
		</div>
	</div>
};

export default Carousel;