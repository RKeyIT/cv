import './Header.css';
import HeaderUI from "./HeaderUI/HeaderUI";
import { useState, useEffect } from "react";

const Header = () => {
	const imageUrls = [
		'bg_moon.jpg',
		'bg_noon.jpg',
		'bg_sunrise.jpg',
		'bg_sunset.jpg'
	]
	const [imagesLoaded, setImagesLoaded] = useState(false);

	useEffect(() => {
		const loadImage = (url: string) => {
			return new Promise((resolve) => {
				const img = new Image();
				img.src = url;
				img.onload = (e) => resolve(e);
			});
		};

		Promise.all(imageUrls.map(loadImage)).then(() => {
			setImagesLoaded(true);
		});
	}, []);

	return <header className="header-wrapper height transition-1000ms">
			{imagesLoaded && <HeaderUI/>}
	</header>
};

export default Header;
