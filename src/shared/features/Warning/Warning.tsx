import './Warning.css'

interface Props {
	message: string
}

const Warning = ({ message }) => {
	return <div className={ `Warning` }>
		<p className={ 'message' }>{ message }</p>
	</div>
};

export default Warning;