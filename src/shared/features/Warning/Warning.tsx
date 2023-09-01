import './Warning.css'
import { FC } from "react";

interface Props {
	message: string
}

const Warning: FC<Props> = ({ message }) => {
	return <div className={ `Warning` }>
		<p className={ 'message' }>{ message }</p>
	</div>
};

export default Warning;