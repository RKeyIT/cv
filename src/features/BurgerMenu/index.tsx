import { useState } from 'react';
import './style.css'
import './media.css'

const BurgerMenu = () => {
	const [ isActive, setActive ] = useState(false);

	const openMenu = () => {
		setActive(!isActive);
	}

	return <div className="header-burger-menu">
		<button onClick={ openMenu }
		        className={ `transition-500ms btn-separators-container${ isActive ? '-active' : '' }` }>
			<div className="transition-500ms btn-burger-line-1">|</div>
			<div className="transition-1000ms btn-burger-line-2">|</div>
			<div className="transition-500ms btn-burger-line-3">|</div>
		</button>

		{ isActive &&
			<ul className={`transition-500ms header-burger-menu-container`}>
				<a className="navlink" href="#">
					<li className="header-burger-menu-item">
						Home
					</li>
				</a>
				<a className="navlink" href="#">
					<li className="header-burger-menu-item">
						About
					</li>
				</a>
				<a className="navlink" href="#">
					<li className="header-burger-menu-item">
						Contact
					</li>
				</a>
			</ul> }
	</div>
};

export default BurgerMenu;
