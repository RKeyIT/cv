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
		<ul>
			<li>
				<p>
					In first, we have 3 types. They are help us understand what and how we will change.
				</p>
				<CodeBlock code={ types } />
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
			</li>
			<li>
				Useful useState hooks based on one of types.
				<CodeBlock code={ states } />
				<ol>
					<li>
						Tab changer hook
					</li>
					<li>
						Hook that responsible for button Expand/Collapse
					</li>
				</ol>
			</li>
			<li>
				Tabs array - components array
				<CodeBlock code={ tabs } />
				Here I have one problem with type. It seems as deprecated and I want to change it later.
			</li>
			<li>
				Last and sweet is the functionality.
				<CodeBlock code={ OpenCloseTab } />
				<CodeBlock code={ tabChanger } />
				<CodeBlock code={ tabGetter } />
				<CodeBlock code={ buttonImplementation } />
				<CodeBlock code={ contentWindow } />
			</li>
		</ul>
	</div>
};

export default TabTab;