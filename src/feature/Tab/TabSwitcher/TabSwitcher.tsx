import { FC } from "react";
import IconArrow from "../../../shared/IconArrow/IconArrow";
import { ActivateTab, Direction, ChangeTab } from "../types";
import './TabSwitcher.css'

interface Props {
	tabActive: ChangeTab
	changeTab: (direction: Direction) => void,
	activateTab: (numOfTab: ActivateTab) => void
}

const TabSwitcher: FC<Props> = ({tabActive, changeTab, activateTab}) => {
	return <div className={ `TabSwitcher` }>
		<div className="switcher">
			<button className="button left" onClick={ () => changeTab(-1) }>
				<IconArrow direction={"left"} />
			</button>

			<div className="tabs">
				<button className={ `tab button${ tabActive === 1 ? ' active' : '' }` }
				        onClick={ () => activateTab(1) }>
					Theme
				</button>
				<button className={ `tab button${ tabActive === 2 ? ' active' : '' }` }
				        onClick={ () => activateTab(2) }>
					Slider
				</button>
				<button className={ `tab button${ tabActive === 3 ? ' active' : '' }` }
				        onClick={ () => activateTab(3) }>
					Tab
				</button>
				<button className={ `tab button${ tabActive === 4 ? ' active' : '' }` }
				        onClick={ () => activateTab(4) }>
					Parallax
				</button>
			</div>

			<button className="button right" onClick={ () => changeTab(1) }>
				<IconArrow direction={"right"} />
			</button>
		</div>
	</div>
};

export default TabSwitcher;