import './HeaderPC.css'
import { Link } from "react-router-dom";
import AppIcon from "../../../shared/AppIcon/AppIcon";
import ThemeSwitcher from "../../../app/Theme/ThemeSwitcher";
import MenuPC from "./MenuPC/MenuPC";

const HeaderPC = () => {
	return <div className={ `HeaderPC container` }>
		<Link to={'/'} className="logo ">
			<AppIcon />
		</Link>
		<ThemeSwitcher />
		<MenuPC />
	</div>
};

export default HeaderPC;