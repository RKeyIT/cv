import './About.css'
import TypingText from "./TypingText/TypingText";
import Me from "./Me/Me";
import Summary from "./Summary/Summary";

const About = () => {
	return <div className={ `About container` }>
		<div className="warning-container">
			<h2 className={ 'warning' }>Warning</h2>
		</div>
		<TypingText />
		<Me />
		<Summary />
	</div>
};

export default About;