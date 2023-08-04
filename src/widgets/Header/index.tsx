import React from 'react';
import ThemePicker from "../../features/Theme/ThemePicker";
import './style.css';

const Header = () => {
	return <header className="header-wrapper transition-1000ms">
		<div className="header-ui">
			<div className="header-logo">
				<h1 className="h1-cv">RKey CV</h1>
			</div>
			<div className="themepicker">
				<ThemePicker />
			</div>
			<ul className="header-menu transition-200ms">
				<a className="navlink" href="">
					<li>Home</li>
				</a>
				<a className="navlink" href="">
					<li>Projects</li>
				</a>
				<a className="navlink" href="">
					<li>Contacts</li>
				</a>
			</ul>
		</div>
	</header>
};

export default Header;
