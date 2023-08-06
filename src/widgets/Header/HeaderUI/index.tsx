import ThemePicker from "../../../features/Theme/ThemePicker";
import AppIcon from "../../../shared/AppIcon";
import './style.css'
import './media.css'
import BurgerMenu from "../../../features/BurgerMenu";

const HeaderUI = () => {
	return <div className="header-ui">
			<div className="header-logo">
				<AppIcon />
				<h1 className="h1-cv">RKey CV</h1>
			</div>
			<div className="header-themepicker">
				<ThemePicker />
			</div>
			<ul className="header-inline-menu transition-200ms">
				<a className="navlink" href="#">
					<li>Home</li>
				</a>
				<a className="navlink" href="#">
					<li>Projects</li>
				</a>
				<a className="navlink" href="#">
					<li>Contacts</li>
				</a>
			</ul>
			<BurgerMenu/>
		</div>
};

export default HeaderUI;
