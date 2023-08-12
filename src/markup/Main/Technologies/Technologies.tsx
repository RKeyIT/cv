import './style.css'
import IconReact from "../../../shared/IconReact/IconReact";

const Technologies = () => {
	return <div className={ `Technologies height` }>
		<div className="container">
			<div className="content">
				<h2 className={`h2`}>Technologies used in project</h2>
				<div className="carousel">
					<div className="carousel-slide">
						<IconReact />
					</div>
				</div>
			</div>
		</div>
	</div>
};

export default Technologies;