import Light from 'react-syntax-highlighter'
import { rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const CodeBlock = ({ code }) => {
	return <Light language={ "javascript-tsx" } style={ rainbow }>
		{ code }
	</Light>
};

export default CodeBlock;