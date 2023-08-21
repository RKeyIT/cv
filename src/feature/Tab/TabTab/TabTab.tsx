import CodeBlock from "../../../shared/CodeBlock/CodeBlock";
import {
	OpenCloseTab,
	states,
	types,
	tabs,
	tabChanger,
	tabGetter,
	buttonImplementation,
	contentWindow
} from "./CodeExamples";

const TabTab = () => {
	return <div className={ `TabTab` }>
		<h3>Welcome to Tab tab!</h3>
		<p>
			Let me show you how this component works!
		</p>
		<p>
			It's contains types, useState hooks, tabs array and logic functions.
		</p>
		<p>
			Interactive tabs are stashed in the button tags for better semantic and computer vision.
		</p>
		<p>
			So, let's see:
		</p>
		<h4>
			In first, we have 3 types. They are help us understand what and how we will change.
		</h4>
		<p>
			<CodeBlock code={ types } />

		</p>
		<ol>
			<li>
				Activate tab that was clicked.
			</li>
			<li>
				Change tab on null if active tab was clicked again or change tab that was clicked.
			</li>
			<li>
				And direction for arrow buttons
			</li>
		</ol>
		<h4>
			Useful useState hooks based on one of types.
		</h4>
		<p>
			<CodeBlock code={ states } />

		</p>
		<ol>
			<li>
				Tab changer hook
			</li>
			<li>
				Hook that responsible for button Expand/Collapse
			</li>
		</ol>
		<h4>Tabs array - components array</h4>
		<p><CodeBlock code={ tabs } /></p>
		<p>Here I have one problem with type. It seems as deprecated and I want to change it later.</p>
		<h4>Last and sweet is the functionality.</h4>
		<CodeBlock code={ OpenCloseTab } />
		<CodeBlock code={ tabChanger } />
		<CodeBlock code={ tabGetter } />
		<CodeBlock code={ buttonImplementation } />
		<CodeBlock code={ contentWindow } />
	</div>
};

export default TabTab;