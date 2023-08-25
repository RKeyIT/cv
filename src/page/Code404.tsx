import { Link } from "react-router-dom";

const Code404 = () => {
	return <div className={ `Code404 container` }>
		<h2>
			Error 404! Incorrect page address.
			<Link to="/">To home</Link>
		</h2>
	</div>
};

export default Code404;