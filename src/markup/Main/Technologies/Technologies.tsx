import './style.css'
import Carousel from "../../../feature/Carousel/Carousel";

const Technologies = () => {
	return <div className={ `Technologies height` }>
		<div className="container">
			<div className="content">
				<h2 className={`h2`}>Technologies used in project</h2>
				<Carousel />
			</div>
		</div>
	</div>
};

export default Technologies;