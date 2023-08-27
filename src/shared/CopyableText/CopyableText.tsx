import './CopyableText.css'
import { FC, useState, useEffect } from "react";

type Props = { text: string, copiedText?: string }

const CopyableText: FC<Props> = ({ text, copiedText }) => {
	const [ isCopied, setCopied ] = useState(false)

	useEffect(() => {
		const copy = setTimeout(() =>  setCopied(false),2000)

		return () => clearTimeout(copy)
	}, [ isCopied ])

	const handleClick = () => {
		navigator.clipboard.writeText(copiedText ? copiedText : text)
			.then(() => setCopied(true))
			.catch(() => console.error(`Error in CopyableText component occurred!`))
	}

	return <span className={ `CopyableText` } onClick={ () => handleClick() }>
		<span className={`text-link`}>{ text }</span>
		{ isCopied && <span className={ `SuccessCopyMessage` }>
			Text <b>{ copiedText ? copiedText : text }</b> was copied.
		</span>}
	</span>
};

export default CopyableText;