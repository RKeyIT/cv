import { FC, ReactNode, useState, ChangeEvent } from "react";

interface Props {
	components: ReactNode[],
	name: string
}

const TabVersionSwitcher: FC<Props> = ({ components, name }) => {
	const [ version, setVersion ] = useState(components.length - 1)

	const versionChanger = (event: ChangeEvent<HTMLSelectElement>) => {
		setVersion(+event.target.value)
	}

	return <>
		<h3>
			{ name } v{ version + 1 }
		</h3>
		<label htmlFor={ `versions` }>Chose version:&nbsp;</label>
		<select id={ `versions` } value={ version } onChange={ versionChanger }>
			{ components.map((_, i) => {
				return <option
					value={ i } key={ i }
				>
					{ i === components.length - 1 ? `Last` : i + 1 }
				</option>
			}) }
		</select>
		{ components[ version ] }
	</>
};

export default TabVersionSwitcher;