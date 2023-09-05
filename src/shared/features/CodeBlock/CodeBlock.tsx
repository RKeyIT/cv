import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { FC } from "react";

interface CodeBlockProps {
	code: string
}

const CodeBlock: FC<CodeBlockProps> = ({ code }) => {
	return <SyntaxHighlighter language={ "javascript-tsx" } style={ rainbow }>
		{ code }
	</SyntaxHighlighter>
};

export default CodeBlock;