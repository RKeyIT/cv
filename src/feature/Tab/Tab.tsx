import './Tab.css'
import IconArrow from "../../shared/IconArrow/IconArrow";

const Tab = () => {
	return <div className={ `Tab` }>
		<div className="container window height">
			<h2>Features of project</h2>

			<div className="switcher">
				<button className="left">
					<IconArrow />
				</button>

				<button className="button">Theme</button>
				<button className="button">Carousel</button>
				<button className="button">Tab</button>
				<button className="button">Parallax</button>

				<button className="right">
					<IconArrow />
				</button>
			</div>

		</div>
	</div>
};

export default Tab;