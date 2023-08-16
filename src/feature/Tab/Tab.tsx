import './Tab.css'
import IconArrow from "../../shared/IconArrow/IconArrow";
import { useState, } from "react";
import NullTab from "./NullTab/NullTab";
import ThemeTab from "./ThemeTab/ThemeTab";
import SliderTab from "./SliderTab/SliderTab";
import TabTab from "./TabTab/TabTab";
import ParallaxTab from "./ParallaxTab/ParallaxTab";
import { useSwipeable } from "react-swipeable";

type ActivateTab = 1 | 2 | 3 | 4
type ChangeTab = null | ActivateTab
type Direction = -1 | 1

const Tab = () => {
	const [ tabActive, setTabActive ] = useState<ChangeTab>(null);
	const [ isExpanded, setExpanded ] = useState(false)
	const swipeable = useSwipeable({
		onSwipedLeft: () => changeTab(1),
		onSwipedRight: () => changeTab(-1),
		trackMouse: true
	})

	// TODO: Find a new type for this
	const tabs: JSX.Element[] = [
		<NullTab />,
		<ThemeTab />,
		<SliderTab />,
		<TabTab />,
		<ParallaxTab />
	]

	const activateTab = (tab: ActivateTab) => {
		return tab === tabActive ? setTabActive(null) : setTabActive(tab)
	}
	const changeTab = (direction: Direction) => {
		if (tabActive === null) return setTabActive(direction === 1 ? 1 : 4)
		if (tabActive === 1 && direction === -1) return setTabActive(4)
		if (tabActive === 4 && direction === 1) return setTabActive(1)
		// TODO: "as" syntax
		return setTabActive(prev => (prev! + direction) as ChangeTab)
	}

	// TODO: Find a new type for this
	const showTab = (tab: JSX.Element) => tab

	// TODO: Add arrow buttons to expanded window
	return <div className={ `Tab` }>
		<div className="container window height">
			<h2>Features of project</h2>

			<div className="switcher">
				<button className="left" onClick={ () => changeTab(-1) }>
					<IconArrow />
				</button>

				<div className="tabs">
					<button className={ `button${ tabActive === 1 ? ' active' : '' }` }
					        onClick={ () => activateTab(1) }>
						Theme
					</button>
					<button className={ `button${ tabActive === 2 ? ' active' : '' }` }
					        onClick={ () => activateTab(2) }>
						Slider
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

				<button className="right" onClick={ () => changeTab(1) }>
					<IconArrow />
				</button>
			</div>

			<div { ...swipeable } className={ `content-container${ isExpanded ? ' expanded' : '' }` }>
				<div className="content" id="content">
					{ !tabActive && <NullTab /> }
					{ tabActive && showTab(tabs[ tabActive ]) }
				</div>
				{/*<a href="#content"> dont work to return content on first line*/ }
				<button className="expand-btn" onClick={ () => setExpanded(!isExpanded) }>
					{ isExpanded ? "Collapse" : "Expand" }
				</button>
			</div>
		</div>
	</div>
}

export default Tab