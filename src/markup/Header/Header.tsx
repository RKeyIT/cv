import './Header.css';
import HeaderUI from "./HeaderUI/HeaderUI";

const Header = () => {
	return <header className="header-wrapper height transition-1000ms">
		<div className="container">
			<HeaderUI />

		</div>
	</header>
};

export default Header;
