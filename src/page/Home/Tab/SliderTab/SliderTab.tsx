import CodeBlock from "../../../../shared/features/CodeBlock/CodeBlock";
import { type, state, effect } from "./CodeExamples";
import TabVersionSwitcher from "../TabVersionSwitcher/TabVersionSwitcher";

const SliderTab = () => {
	const V1 = () => <>
	<p>
		Currently it has a simple implementation that contains one type, one state, one effect and a markup.
	</p>
	<CodeBlock code={ type } />
	<CodeBlock code={ state } />
	<p>
		It has unresolved task with type assertion into code below.
	</p>
	<CodeBlock code={ effect } />
	</>
	const components = [ <V1 /> ]

	return <div className={ `SliderTab` }>
		<TabVersionSwitcher components={components} name={`Slider`} />
	</div>

};

export default SliderTab;