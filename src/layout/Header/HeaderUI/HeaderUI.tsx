import './HeaderUI.css'
import './HeaderUIMedia.css'
import ThemeSwitcher from "../../../feature/Theme/ThemeSwitcher";
import AppIcon from "../../../shared/AppIcon/AppIcon";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import InlineMenu from "./InlineMenu/InlineMenu";

const HeaderUI = () => {
	return <div className="header-ui">
			<div className="container">
				<div className="header-logo">
					<AppIcon />
				</div>
				<ThemeSwitcher />
				<InlineMenu />
				<BurgerMenu />
			</div>
	</div>
};

export default HeaderUI;
