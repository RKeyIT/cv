import './MenuPC.css'
import { Link } from "react-router-dom";

const MenuPC = () => {
	return <ul className="MenuPC transition-200ms">
		<Link className="navlink" to="/">
			<li>Home</li>
		</Link>
		<Link className="navlink" to="about">
			<li>About</li>
		</Link>
		<Link className="navlink" to="contact">
			<li>Contacts</li>
		</Link>
	</ul>
};

export default MenuPC;
