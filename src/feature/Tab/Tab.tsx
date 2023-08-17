import './Tab.css'
import { useState, } from "react";
import NullTab from "./NullTab/NullTab";
import ThemeTab from "./ThemeTab/ThemeTab";
import SliderTab from "./SliderTab/SliderTab";
import TabTab from "./TabTab/TabTab";
import ParallaxTab from "./ParallaxTab/ParallaxTab";
import { useSwipeable } from "react-swipeable";
import { ChangeTab, ActivateTab, Direction } from "./types";
import TabSwitcher from "./TabSwitcher/TabSwitcher";

const Tab = () => {
	const [ tabActive, setTabActive ] = useState<ChangeTab>(null);
	const [ isExpanded, setExpanded ] = useState(false);

	// TODO: Scrolling of code blocks activate swipe actions! Fix it.
	const swipeable = useSwipeable({
		onSwipedLeft: () => changeTab(1),
		onSwipedRight: () => changeTab(-1),
		onSwipedUp: () => setTabActive(null),
		onSwipedDown: () => setTabActive(null),
		swipeDuration: 300,
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

			<TabSwitcher tabActive={ tabActive } changeTab={ changeTab } activateTab={ activateTab } />

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