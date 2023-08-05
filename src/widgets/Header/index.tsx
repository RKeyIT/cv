import React from 'react';
import './style.css';
import HeaderUI from "./HeaderUI";
import HeaderContent from "./HeaderContent";

const Header = () => {
	return <header className="header-wrapper transition-1000ms">
		<HeaderUI />
		<HeaderContent />
	</header>
};

export default Header;
