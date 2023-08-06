import './style.css'
import GreetingsContent from "../../../entities/GreetingsContent";

const HeaderContent = () => {
	return <div className="header-content">
		<div className="header-content-heading">
			<div></div>
			<h2 className="header-content-h2">Greetings :)</h2>
		</div>
		<div className="header-content-container">
			<div></div>
			<div className="header-content-text-container">
				<GreetingsContent />
			</div>
		</div>
	</div>
};

export default HeaderContent;
