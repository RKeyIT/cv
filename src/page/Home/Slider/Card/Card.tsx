import './Card.css'
import IconReact from "../../../../shared/IconReact/IconReact";

const Card = () => {
	return <div className={ `Card` }>
		<div className="image">
			<IconReact />
		</div>
		<div className="description">
			React
		</div>
	</div>
};

export default Card;