import { FC } from 'react';
import './Footer.css'
import IconLinkedIn from "../../shared/IconLinkedIn/IconLinkedIn";
import IconGitHub from "../../shared/IconGitHub/IconGitHub";
import IconTelegram from "../../shared/IconTelegram/IconTelegram";

const Footer: FC = () => {
	return <>
		<footer className={`footer-wrapper`}>
			<div className={`container`}>
				<div className={`footer-grid`}>
					<div className={`footer-socials`}>
						<IconLinkedIn />
						<IconGitHub />
						<IconTelegram />
					</div>
					<div className="footer-contacts">
						<div className="gmail">
							Gmail: gmail@gmail.com
						</div>
						<div className="phone">
							Phone: +45645465456
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
