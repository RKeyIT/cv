import TypingText from "../TypingText/TypingText";
import Me from "../Me/Me";
import Warning from "./Warning/Warning";

const TextContent = () => {
	return <div className={ `TextContent` }>
		<div className="container">
			<Warning />
			<TypingText />
			<Me />
		</div>
	</div>
};

export default TextContent;