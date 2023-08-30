import CodeBlock from "../../../shared/CodeBlock/CodeBlock";
import { type, state, effect } from "./CodeExamples";

const SliderTab = () => {

	return <div className={ `CarouselTab` }>
		<h3>Slider v1</h3>
		<p>
			Currently it has a simple implementation that contains one type, one state, one effect and a markup.
		</p>
		<CodeBlock code={ type } />
		<CodeBlock code={ state } />
		<p>
			It has unresolved task with type assertion into code below.
		</p>
		<CodeBlock code={ effect } />
	</div>
};

export default SliderTab;