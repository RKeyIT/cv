export const types =
`type ActivateTab = 1 | 2 | 3 | 4
type ChangeTab = null | ActivateTab
type Direction = -1 | 1`

export const states =
`const [ tabActive, setTabActive ] = useState<ChangeTab>(null)
const [ isExpanded, setExpanded ] = useState(false)`

export const tabs =
`const tabs: JSX.Element[] = [
	<NullTab />,
	<ThemeTab />,
	<CarouselTab />,
	<TabTab />,
	<ParallaxTab />
]`

export const OpenCloseTab =
	`const activateTab = (num: ActivateTab) => {
	return num === tabActive ? setTabActive(null) : setTabActive(num)
}`

export const tabChanger =
`const changeTab = (direction: Direction) => {
	if (tabActive === null) return setTabActive(direction === 1 ? 1 : 4)
	if (tabActive === 1 && direction === -1) return setTabActive(4)
	if (tabActive === 4 && direction === 1) return setTabActive(1)
	return setTabActive(prev => (prev! + direction))
}`

export const tabGetter =
`const showTab = (tab: JSX.Element) => tab`

export const buttonImplementation =
`<button className={ 'button\${ tabActive === 1 ? ' active' : '' }' }
	onClick={ () => activateTab(1) }>
Theme
</button>`

export const contentWindow =
`<div className="content" id="content">
	{ !tabActive && <NullTab /> }
	{ tabActive && showTab(tabs[ tabActive ]) }
</div>`