import { FC } from 'react';
import './Footer.css'
import IconLinkedIn from "../../shared/IconLinkedIn/IconLinkedIn";
import IconGitHub from "../../shared/IconGitHub/IconGitHub";

const Footer: FC = () => {
	return <>
		<footer className={`footer-wrapper`}>
			<div className={`container `}>
				<div className={`footer-flex`}>
					<div className={`footer-socials`}>
						<IconLinkedIn />
						<IconGitHub />
					</div>
					<div className="footer-contacts">
						<div className="gmail">
							Gmail: gmail@gmail.com
						</div>
						<div className="phone">
							Phone/Telegram: +45645465456
						</div>
					</div>
					<div className="footer-copyright">
						<p>© 2023 Raman Krytski</p>
					</div>
				</div>
			</div>
		</footer>
	</>
};

export default Footer;
