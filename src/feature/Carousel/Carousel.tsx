import IconReact from "../../shared/IconReact/IconReact";

const Carousel = () => {
	return <div className={ `Carousel` }>
		<div className="container window">
			<div className="container slide">
				<IconReact />
			</div>
			<div className="container slide">TS</div>
			<div className="container slide">SASS</div>
			<div className="container slide">VITE</div>
		</div>
	</div>
};

export default Carousel;