import './HeaderMobile.css'
import AppIcon from "../../../shared/icons/AppIcon/AppIcon";
import ThemeSwitcher from "../../../app/Theme/ThemeSwitcher";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { Link } from "react-router-dom";

const HeaderMobile = () => {
	return <div className={ `HeaderMobile` }>
		<div className="container">
			<Link to={'/'} className="logo">
				<AppIcon />
			</Link>
			<ThemeSwitcher />
			<BurgerMenu />
		</div>
	</div>
};

export default HeaderMobile;