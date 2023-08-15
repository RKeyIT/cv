import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface CodeBlockProps {
	code: string
}

const CodeBlock = ({ code }: CodeBlockProps) => {
	return <SyntaxHighlighter language={ "javascript-tsx" } style={ rainbow }>
		{ code }
	</SyntaxHighlighter>
};

export default CodeBlock;