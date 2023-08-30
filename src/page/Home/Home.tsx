import Slider from "./Slider/Slider";
import Tab from "./Tab/Tab";
import Intro from "./Intro/Intro";

const Home = () => {
	return <div className={ `Home` }>
		<Intro />
		<Slider />
		<Tab />
	</div>
};

export default Home;