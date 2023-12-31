import './Tab.css'
import { useState, FC, useEffect, ReactNode, } from "react";
import NullTab from "./NullTab/NullTab";
import ThemeTab from "./ThemeTab/ThemeTab";
import SliderTab from "./SliderTab/SliderTab";
import TabTab from "./TabTab/TabTab";
import ParallaxTab from "./ParallaxTab/ParallaxTab";
import { useSwipeable } from "react-swipeable";
import { ChangeTab, ActivateTab, Direction } from "./types";
import TabSwitcher from "./TabSwitcher/TabSwitcher";
import { isBrowser } from "react-device-detect"
import GlobalScrollOff from "./GlobalScrollOff/GlobalScrollOff";
import IconArrow from "../../../shared/icons/IconArrow/IconArrow";

const Tab: FC = () => {
	const [ tabActive, setTabActive ] = useState<ChangeTab>(null);
	const [ isExpanded, setExpanded ] = useState<boolean>(false);
	const [ taps, setTaps ] = useState<number>(0);

	// Is it need? Returns to null tab if content window was collapsed
	useEffect(() => {
		if (!isExpanded) setTabActive(null)
	}, [ isExpanded ])

	useEffect(() => {
		if (taps === 2) setExpanded(prevState => !prevState)
		const delay = setTimeout(() => setTaps(0), 300)
		return () => clearTimeout(delay)
	}, [ taps ])

	// TODO: Scrolling of code blocks activate swipe actions! Fix it.
	const swipeable = useSwipeable({
		onSwipedLeft: () => changeTab(1),
		onSwipedRight: () => changeTab(-1),
		onTouchStartOrOnMouseDown: () => setTaps(prevState => prevState + 1),
		swipeDuration: 300,
		// trackMouse: true
	})

	const tabs: ReactNode[] = [
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

	const showTab = (tab: ReactNode) => tab

	return <div className={ `Tab` }>
		{ isExpanded && <GlobalScrollOff /> }
		<div className="container padding window height">
			<h2>Features of project</h2>

			<TabSwitcher tabActive={ tabActive } changeTab={ changeTab } activateTab={ activateTab } />

			<div { ...swipeable }
			     className={ `content-container${ isExpanded ? ' expanded' : '' } ${isBrowser ? ' browser': ''}` }>
				<div className={ `content${ isBrowser ? ' browser' : '' }` } id="content">
					{ !tabActive && <NullTab /> }
					{ tabActive && showTab(tabs[ tabActive ]) }
				</div>
				{ isExpanded &&
					<>
						<button onClick={() => changeTab(-1)}
						        className={`exp-btn-to-left${isBrowser ? ' browser' : ' mobile'}`}>
							<IconArrow direction={"left"}/>
						</button>
						<button onClick={() => changeTab(1)}
						        className={`exp-btn-to-right${isBrowser ? ' browser' : ' mobile'}`}>
							<IconArrow direction={"right"}/>
						</button>
					</>
				}
				<button className={`expand-btn${isBrowser ? ' browser': ''}`} onClick={ () => setExpanded(!isExpanded) }>
					{ isExpanded ? "Collapse" : "Expand" }
				</button>
			</div>
		</div>
	</div>
}

export default Tab