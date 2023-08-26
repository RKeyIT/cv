import './TypingText.css'
import { useState, useEffect } from "react";

const TypingText = () => {
	const message = `This is almost private content`
	const [ text, setText ] = useState('')

	const typingInterval = () => Math.random() * 100 + 30
	const typeLetter = () => {
		setTimeout(() => setText(text + message[ text.length ]), typingInterval())
	}

	useEffect(() => {
		text === message
			? setTimeout(() => setText(''), 5000)
			: typeLetter()
	}, [ text ])

	return <div className={ `TypingText` }>
		<p className={ `text` }>
			{ text }
		</p>
	</div>
};

export default TypingText;