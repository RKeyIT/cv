import './BurgerNav.css'

const BurgerNav = () => {
	return <ul className={ `transition-500ms header-burger-menu-container` }>
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
	</ul>
};

export default BurgerNav;
