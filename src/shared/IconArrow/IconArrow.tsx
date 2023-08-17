import { FC } from "react";

interface Props {
	direction: `left` | `right`
}

const IconArrow: FC<Props> = ({ direction }) => {
	if (direction === 'left') {
		return <svg className="svg-theme-icon" width="100%" height="100%"
		            viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
		            xmlns="http://www.w3.org/2000/svg"
		            stroke="currentColor" fill="none"
		>
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
			      d="m11 9-3 3m0 0 3 3m-3-3h8m-8.8 8h9.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C20 18.48 20 17.92 20 16.8V7.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C18.48 4 17.92 4 16.8 4H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 5.52 4 6.08 4 7.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C5.52 20 6.08 20 7.2 20Z" />
		</svg>
	} else if (direction === "right") {
		return <svg className="svg-theme-icon" width="100%" height="100%"
		            viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"
		            xmlns="http://www.w3.org/2000/svg"
		            stroke="currentColor" fill="none"
		>
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
			      d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
			/>
		</svg>
	}
};

export default IconArrow;