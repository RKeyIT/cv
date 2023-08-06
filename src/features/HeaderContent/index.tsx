import './style.css'
import GreetingsContent from "../../entities/GreetingsContent";

const HeaderContent = () => {
	return <div className="header-content">
		<div className="header-content-heading">
			<h2 className="header-content-h2">
				Greetings :)
			</h2>
		</div>
		<div className="header-content-container">
			<GreetingsContent />
		</div>
	</div>
};

export default HeaderContent;
