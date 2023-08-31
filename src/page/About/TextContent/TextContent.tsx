import TypingText from "../../../shared/features/TypingText/TypingText";
import Me from "../Me/Me";
import Warning from "../../../shared/features/Warning/Warning";

const TextContent = () => {
	return <div className={ `TextContent` }>
		<div className="container">
			<Warning message={`Warning`}/>
			<TypingText message={`This is almost private content`}/>
			<Me />
		</div>
	</div>
};

export default TextContent;