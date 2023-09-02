import './NullTab.css'
import { isBrowser } from "react-device-detect"
import TabVersionSwitcher from "../TabVersionSwitcher/TabVersionSwitcher";

const NullTab = () => {
	const V1 = () => {
		return <>
			<p>
				This is description and guide of this section.&nbsp;
				<b>Next versions will contain patch notes for section</b>
			</p>
			<p>
				You can double tap/click on this window to expand/collapse it.
				Also, on the bottom of this section you can find "Expand" button.
				It's expand this window on full screen and add scroll option.
				After expanding it will change on "Collapse" button and add you option to close scrollable window.
			</p>
			<p>
				Any tab contains description with code examples about same-named feature that you can see on my website
			</p>
			<p>
				Swipe content window or click on any "Tab item" or "Left/Right" arrows to see what happens.
			</p>
			<p>
				Also you can click on the active tab to close it and return yourself here.
			</p>
			<p>
				<b>Enjoy!</b>
			</p>
		</>
	}
	const V2 = () => <>
		<p>To see usage guide of this section - chose <b>first</b> version of this tab</p>
		<section>
			<h4>New features:</h4>
			<p>
				Version change shared component.
			</p>
			<p>
				Content markup is a V(number) built-in component versions as V1 for example
			</p>
		</section>
	</>
	const components = [ <V1/>, <V2/> ]

	return <div className={ `NullTab${ isBrowser ? ' browser' : '' }` }>
		<TabVersionSwitcher components={components} name={`NullTab`} />
	</div>
};

export default NullTab;