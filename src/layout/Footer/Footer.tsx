import { FC } from 'react';
import './Footer.css'
import IconLinkedIn from "../../shared/icons/IconLinkedIn/IconLinkedIn";
import IconGitHub from "../../shared/icons/IconGitHub/IconGitHub";
import CopyableText from "../../shared/features/CopyableText/CopyableText";

const Footer: FC = () => {
	return <footer className={`Footer`}>
			<div className={`container `}>
				<div className={`footer-flex`}>
					<div className={`footer-socials`}>
						<IconLinkedIn />
						<IconGitHub />
					</div>
					<div className="footer-contacts">
						<div className="gmail">
							<CopyableText text={`Gmail: rkeydevelop@gmail.com`} copiedText={`rkeydevelop@gmail.com`}/>
						</div>
						<div className="phone">
							<CopyableText text={`Phone/Telegram: +48794673466`} copiedText={`+48794673466`}/>
						</div>
					</div>
					<div className="footer-copyright">
						<p>© 2023 Raman Krytski</p>
					</div>
				</div>
			</div>
		</footer>
};

export default Footer;
