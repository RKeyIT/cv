import CodeBlock from "../../../shared/CodeBlock/CodeBlock";
import { OpenCloseTab } from "../NullTab/CodeExamples";

const TabTab = () => {
	return <div className={ `TabTab` }>
		<h3>Welcome to Tab tab!</h3>
		<p>
			Let me show you how this component works!
		</p>
		<CodeBlock code={OpenCloseTab} language={"javascript-tsx"} />
	</div>
};

export default TabTab;