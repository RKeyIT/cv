import './BurgerMenu.css'
import './MenuMobileMedia.css'
import { Link } from "react-router-dom";
import { useState, Ref, useRef, useEffect, FC } from "react";

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
			// WARNING: This is a temporary solution based on animation timer in MobileMenu.sass
			// Rules in .active and .non-active classes
			: setTimeout(() => setisDisplayNone(true), 500);
	}, [ isActive ])

	return <div className="BurgerMenu">
		<button onClick={ burgerBtnHandler } ref={ burgerBtnRef }
		        className={ `transition-500ms burger-btn${ isActive ? '-active' : '' }` }>
			<span className="transition-500ms burger-btn-line-1">|</span>
			<span className="transition-500ms burger-btn-line-2">|</span>
			<span className="transition-500ms burger-btn-line-3">|</span>
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

export default BurgerMenu;
