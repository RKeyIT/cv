import './Header.css';
import HeaderUI from "./HeaderUI/HeaderUI";
import HeaderContent from "./HeaderContent/HeaderContent";

const Header = () => {
	return <header className="header-wrapper transition-1000ms">
			<HeaderUI />
			{/*<HeaderContent />*/}
	</header>
};

export default Header;
