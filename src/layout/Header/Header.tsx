import './Header.css';
import { useState, useEffect } from "react";
import {isMobile, isBrowser} from 'react-device-detect'
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import HeaderPC from "./HeaderPC/HeaderPC";

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

	return <header className="Header height">
			{imagesLoaded &&
				<>
					{ isMobile && <HeaderMobile /> }
					{ isBrowser && <HeaderPC /> }
				</>
			}
	</header>
};

export default Header;
