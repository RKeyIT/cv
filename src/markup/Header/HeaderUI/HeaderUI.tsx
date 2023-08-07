import './style.css'
import './media.css'
import ThemePicker from "./Theme/ThemePicker";
import AppIcon from "../../../shared/AppIcon/AppIcon";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import InlineMenu from "./InlineMenu/InlineMenu";

const HeaderUI = () => {
	return <div className="header-ui">
		<AppIcon />
		<ThemePicker />
		<InlineMenu />
		<BurgerMenu />
	</div>
};

export default HeaderUI;
