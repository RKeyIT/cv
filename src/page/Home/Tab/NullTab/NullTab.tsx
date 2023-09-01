import './NullTab.css'
import { isBrowser } from "react-device-detect"
import TabVersionSwitcher from "../TabVersionSwitcher/TabVersionSwitcher";

const V1 = () => {
	return <>
		<p>
			This is description and guide of this section.
		</p>
		<p>
			Swipe content window or click on any "Tab item" or "Left/Right" arrows to see what happens.
		</p>
		<p>
			Also you can click on the active tab to close it and return yourself here.
		</p>
		<p>
			Any tab contains description with code examples about same-named feature that you can see on my website
		</p>
		<p>
			You can double tap/click on this window to expand/collapse it.
			Also, on the bottom of this section you can find "Expand" button.
			It's expand this window on full screen and add scroll option.
			After expanding it will change on "Collapse" button and add you option to close scrollable window.
		</p>
		<p>
			<b>Enjoy!</b>
		</p>
	</>
}
const V2 = () => <p>Version 2</p>

const NullTab = () => {
	const components = [ <V1/>, <V2/> ]

	return <div className={ `NullTab${ isBrowser ? ' browser' : '' }` }>
		<TabVersionSwitcher components={components} name={`NullTab`} />
	</div>
};

export default NullTab;