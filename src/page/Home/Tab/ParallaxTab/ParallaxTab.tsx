import TabVersionSwitcher from "../TabVersionSwitcher/TabVersionSwitcher";

const ParallaxTab = () => {
	const V1 = () => <>
		<h3>Welcome to Parallax tab!</h3>
		<p>This feature coming soon...</p>
	</>
	const components = [<V1/>]

	return <div className={ `ParallaxTab` }>
		<TabVersionSwitcher components={components} name={`Parallax`}/>
	</div>
};

export default ParallaxTab;