import './About.css'
import Summary from "./Summary/Summary";
import TextContent from "./TextContent/TextContent";

const About = () => {
	return <div className={ `About` }>
		<TextContent />
		<Summary />
	</div>
};

export default About;