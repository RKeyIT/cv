import './About.css'
import TypingText from "./TypingText/TypingText";

const About = () => {
	return <div className={ `About container` }>
		<div className="warning">
			<h2 className={ 'heading' }>Warning</h2>
		</div>
		<TypingText />
	</div>
};

export default About;