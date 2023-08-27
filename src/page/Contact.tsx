import {BrowserView, MobileView} from 'react-device-detect'

const Contact = () => {
	return <div className={ `Contact` }>
		<BrowserView>
			<div>Browser view</div>
		</BrowserView>
		<MobileView>
			<div>Mobile view</div>
		</MobileView>
	</div>
};

export default Contact;