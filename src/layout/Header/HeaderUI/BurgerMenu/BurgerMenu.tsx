import { useState, useRef, Ref, useEffect, FC } from 'react';
import './BurgerMenu.css'
import './BurgerMenuMedia.css'
import { Link } from "react-router-dom";

// Variant with refs
// Working better than using onBlur
const BurgerMenu: FC = () => {
	const [ isActive, setActive ] = useState<boolean>(false);
	const [ isDisplayNone, setisDisplayNone] = useState<boolean>(false);

	const burgerBtnRef: Ref<any> = useRef(null);
	const burgerMenuRef: Ref<any> = useRef(null);

	const burgerBtnHandler = (): void => {
		setActive(!isActive);
	}

	const isMenuFocused = (element: EventTarget | null): boolean => {
		return burgerBtnRef.current?.contains(element) || burgerMenuRef.current?.contains(element);
	}

	const handleFocusOut = (event: FocusEvent): void => {
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

	useEffect(() => {
		isActive
			? setisDisplayNone(false)
			// TODO: Replace this with a better solution
			// WARNING: This is a temporary solution based on animation timer in BurgerMenu.sass
			// Rules in .active and .non-active classes
			: setTimeout(() => setisDisplayNone(true), 500);
	}, [ isActive ])

	return <div className="header-burger">
		<button onClick={ burgerBtnHandler } ref={ burgerBtnRef }
		        className={ `transition-500ms burger-btn${ isActive ? '-active' : '' }` }>
			<div className="transition-500ms burger-btn-line-1">|</div>
			<div className="transition-500ms burger-btn-line-2">|</div>
			<div className="transition-500ms burger-btn-line-3">|</div>
		</button>
		<ul ref={ burgerMenuRef }
		    className={ `transition-500ms burger-menu ${ isActive ? 'active' : 'non-active' }`
		      + ` ${ isDisplayNone ? 'display-none' : '' }`}
		>
			<Link className="navlink" to="/">
				<li className="burger-menu-item">
					Home
				</li>
			</Link>
			<Link className="navlink" to="about">
				<li className="burger-menu-item">
					About
				</li>
			</Link>
			<Link className="navlink" to="contact">
				<li className="burger-menu-item">
					Contact
				</li>
			</Link>
		</ul>
	</div>
};

// Shortest variant with onBlur
// const BurgerMenu = () => {
// 	const [ isActive, setActive ] = useState(false);
//
// 	const burgerBtnHandler = () => {
// 		setActive(!isActive);
// 	};
//
// 	const handleBlur = () => {
// 		setActive(false);
// 	};
//
// 	return <div className="header-burger-menu" onBlur={ handleBlur }>
// 		<button
// 			onClick={ burgerBtnHandler }
// 			className={ `transition-500ms btn-separators-container${
// 				isActive ? '-active' : ''
// 			}` }
// 		>
// 			<div className="transition-500ms burger-btn-line-1">|</div>
// 			<div className="transition-500ms burger-btn-line-2">|</div>
// 			<div className="transition-500ms burger-btn-line-3">|</div>
// 		</button>
// 		{ isActive && (
// 			<ul className={ `transition-500ms header-burger-menu-container` }>
// 				<a className="navlink" href="#">
// 					<li className="header-burger-menu-item">Home</li>
// 				</a>
// 				<a className="navlink" href="#">
// 					<li className="header-burger-menu-item">About</li>
// 				</a>
// 				<a className="navlink" href="#">
// 					<li className="header-burger-menu-item">Contact</li>
// 				</a>
// 			</ul>
// 		) }
// 	</div>
// };

export default BurgerMenu;
