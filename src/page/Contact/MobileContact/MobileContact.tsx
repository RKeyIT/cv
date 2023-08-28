import './MobileContact.css'
import CopyableText from "../../../shared/CopyableText/CopyableText";

const MobileContact = () => {
	return <div className={ `MobileContact container` }>
		<h3>
			Contact Information
		</h3>
		<p>
			Hello there! Are you enjoying this page?
			Feel free to get in touch if you have any offers, suggestions, or inquiries.
		</p>
		<p>
			I primarily welcome connections
			on <a className={`text-link`} href={`https://www.linkedin.com/in/rkey/`} target={'_blank'}>LinkedIn</a>,
			but you can also reach out to me through other channels such
			as <a className={`text-link`} href={`https://github.com/RKeyIT/`} target={'_blank'}>GitHub</a>, &nbsp;
			<CopyableText text={`phone number`} copiedText={`+48794673466`}/>&nbsp;
			(you can also find me on Telegram), and&nbsp;
			<CopyableText text={`email`} copiedText={`rkeydevelop@gmail.com`}/>.
			You'll find all the necessary contact details in the footer below.
			Looking forward to hearing from you!
		</p>
	</div>
};

export default MobileContact;