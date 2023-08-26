import './HeaderUI.css'
import AppIcon from "../../../shared/AppIcon/AppIcon";
import MobileMenu from "./MobileMenu/MobileMenu";
import PCMenu from "./PCMenu/PCMenu";
import {BrowserView, MobileView} from 'react-device-detect'
import ThemeSwitcher from "../../../app/Theme/ThemeSwitcher";

const HeaderUI = () => {
	return <div className="header-ui">
		<div className="container">
			<div className="header-logo">
				<AppIcon />
			</div>
			<ThemeSwitcher />
			<BrowserView>
				<PCMenu />
			</BrowserView>
			<MobileView>
				<MobileMenu />
			</MobileView>
		</div>
	</div>
};

export default HeaderUI;
