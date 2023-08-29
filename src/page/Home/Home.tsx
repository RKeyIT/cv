import Slider from "../../feature/Slider/Slider";
import Tab from "../../feature/Tab/Tab";
import Intro from "./Intro/Intro";

const Home = () => {
	return <div className={ `Home` }>
		<Intro />
		<Slider />
		<Tab />
	</div>
};

export default Home;