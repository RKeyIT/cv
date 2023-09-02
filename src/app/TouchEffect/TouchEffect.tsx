import './TouchEffect.css'
import { useEffect } from "react";

const TouchEffect = () => {

	useEffect(() => {
		const element = document.getElementById('TouchVisualization')
		let swipeTrail: HTMLDivElement | null = null

		const touchStartHandler = () => {
			swipeTrail = document.createElement('div')
			swipeTrail.classList.add('SwipeTrail')
			element && element.appendChild(swipeTrail)
		}

		const touchMoveHandler = (e: TouchEvent) => {
			const touch = e.touches[ 0 ]
			if (touch && swipeTrail) {
				const x = touch.clientX
				const y = touch.clientY

				swipeTrail.style.left = x + 'px'
				swipeTrail.style.top = y + 'px'
			} else if (swipeTrail && swipeTrail.parentNode) {
				swipeTrail.parentNode.removeChild(swipeTrail)
			}
		}

		const touchEndHandler = () => {
			if (swipeTrail && element) element.removeChild(swipeTrail)
		}

		if(element) {
			element.addEventListener('touchstart', touchStartHandler)
			element.addEventListener('touchmove', touchMoveHandler)
			element.addEventListener('touchend', touchEndHandler)
		}

		return () => {
			if(element) {
				element.removeEventListener(`touchstart`, touchStartHandler)
				element.removeEventListener(`touchmove`, touchMoveHandler)
				element.removeEventListener(`touchend`, touchEndHandler)
			}
		}
	}, [])

	return null
};

export default TouchEffect;