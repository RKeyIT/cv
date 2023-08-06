import './style.css';
import './meadia.css'
import HeaderUI from "../../features/HeaderUI";
import HeaderContent from "../../features/HeaderContent";

const Header = () => {
	return <header className="header-wrapper transition-1000ms">
		<div className="container">
			<HeaderUI />
			<HeaderContent />
		</div>
	</header>
};

export default Header;
