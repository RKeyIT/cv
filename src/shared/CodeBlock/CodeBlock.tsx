import Light from 'react-syntax-highlighter'
import { rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const CodeBlock = ({ language, code }) => {
	return <Light language={ language } style={ rainbow }>
		{ code }
	</Light>
};

export default CodeBlock;