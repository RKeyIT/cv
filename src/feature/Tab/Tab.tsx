import './Tab.css'
import IconArrow from "../../shared/IconArrow/IconArrow";
import { useState } from "react";

const Tab = () => {
	const [ tabActive, setTabActive ] = useState<1 | 2 | 3 | 4 | null>(null);

	const activateTab = (num: 1 | 2 | 3 | 4) => {
		return num === tabActive ? setTabActive(null) : setTabActive(num)
	}
	const changeTab = (direction: -1 | 1) => {
		if (tabActive === null) return setTabActive(direction === 1? 1 : 4)
		if (tabActive === 1 && direction === -1) return setTabActive(4)
		if (tabActive === 4 && direction === 1) return setTabActive(1)
		return setTabActive(prev => prev + direction)
	}

	const showTab = (num: 1 | 2 | 3 | 4) => <div>This is tab with {`${num}`} id!</div>

	return <div className={ `Tab` }>
		<div className="container window height">
			<h2>Features of project</h2>

			<div className="switcher">
				<button className="left" onClick={() => changeTab(-1)}>
					<IconArrow />
				</button>

				<div className="tabs">
					<button className={ `button${ tabActive === 1 ? ' active' : '' }` }
					        onClick={ () => activateTab(1) }>
						Theme
					</button>
					<button className={ `button${ tabActive === 2 ? ' active' : '' }` }
					        onClick={ () => activateTab(2) }>
						Carousel
					</button>
					<button className={ `button${ tabActive === 3 ? ' active' : '' }` }
					        onClick={ () => activateTab(3) }>
						Tab
					</button>
					<button className={ `button${ tabActive === 4 ? ' active' : '' }` }
					        onClick={ () => activateTab(4) }>
						Parallax
					</button>
				</div>

				<button className="right" onClick={() => changeTab(1)}>
					<IconArrow />
				</button>
			</div>

			<div className="content">
				{!tabActive && <div>Click to some "Tab" to open it!</div>}
				{tabActive && showTab(tabActive)}
			</div>

		</div>
	</div>
};

export default Tab;