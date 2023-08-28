import {BrowserView, MobileView} from 'react-device-detect'
import MobileContact from "./MobileContact/MobileContact";

const Contact = () => {
	return <div className={ `Contact` }>
		<BrowserView>
			<div>Browser view</div>
		</BrowserView>
		<MobileView>
			<MobileContact />
		</MobileView>
	</div>
};

export default Contact;