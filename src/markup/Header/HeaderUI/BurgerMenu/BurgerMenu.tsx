import { useState } from 'react';
import './BurgerMenu.css'
import './BurgerMenuMedia.css'
import BurgerNav from "./BurgerNav/BurgerNav";

const BurgerMenu = () => {
	const [ isActive, setActive ] = useState(false);

	const openMenu = () => {
		setActive(!isActive);
	}

	return <div className="header-burger-menu">
		<button onClick={ openMenu }>
		        className={ `transition-500ms btn-separators-container${ isActive ? '-active' : '' }` }>
			<div className="transition-500ms btn-burger-line-1">|</div>
			<div className="transition-500ms btn-burger-line-2">|</div>
			<div className="transition-500ms btn-burger-line-3">|</div>
		</button>
			{ isActive && <BurgerNav />}
	</div>
};

export default BurgerMenu;
