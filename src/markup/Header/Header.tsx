import './style.css';
import './meadia.css'
import HeaderUI from "./HeaderUI/HeaderUI";
import HeaderContent from "./HeaderContent/HeaderContent";

const Header = () => {
	return <header className="header-wrapper">
			<HeaderUI />
			{/*<HeaderContent />*/}
	</header>
};

export default Header;
