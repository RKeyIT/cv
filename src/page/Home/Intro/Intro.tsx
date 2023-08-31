import './Intro.css'
import { Link } from "react-router-dom";

const Intro = () => {
	return <div className={ "Intro" }>
		<section className={ `container` }>
			<h3 className={ `heading` }>Welcome to Home page!</h3>
			<p>
				This page contains short info about couple of features and technologies
				that used on this page.
			</p>
			<p>
				More info about me or my contacts you can
				find on <Link className="text-link" to="about">About</Link>&nbsp;
				or <Link className="text-link" to="contact">Contact</Link> pages
				that you can find in header/burger menu.
			</p>
		</section>
	</div>

};

export default Intro;