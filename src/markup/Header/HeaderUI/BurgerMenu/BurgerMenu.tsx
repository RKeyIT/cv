import { useState, useRef, Ref, useEffect } from 'react';
import './BurgerMenu.css'
import './BurgerMenuMedia.css'

const BurgerMenu = () => {
	const [ isActive, setActive ] = useState(false);
	const burgerBtnRef: Ref<any> = useRef(null);
	const burgerMenuRef: Ref<any> = useRef(null);

	const openMenu = () => {
		setActive(!isActive);
	}

	const isMenuFocused = (element) => {
		return burgerBtnRef.current?.contains(element) || burgerMenuRef.current?.contains(element);
	}
	const handleFocusOut = (event) => {
		if (!isMenuFocused(event.relatedTarget)) {
			setActive(false);
		}
	};

	useEffect(() => {
		document.addEventListener('focusout', handleFocusOut);
		return () => {
			document.removeEventListener('focusout', handleFocusOut);
		}
	}, [])

	return <div className="header-burger-menu">
		<button onClick={ openMenu } ref={ burgerBtnRef }
		        className={ `transition-500ms btn-separators-container${ isActive ? '-active' : '' }` }>
			<div className="transition-500ms btn-burger-line-1">|</div>
			<div className="transition-500ms btn-burger-line-2">|</div>
			<div className="transition-500ms btn-burger-line-3">|</div>
		</button>
		{/*{ isActive && <BurgerNav ref={burgerMenuRef} />}*/ }
		{ isActive && <ul ref={ burgerMenuRef } className={ `transition-500ms header-burger-menu-container` }>
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
