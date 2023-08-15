export const OpenCloseTab =
	`const activateTab = (num: 1 | 2 | 3 | 4) => {
	return num === tabActive ? setTabActive(null) : setTabActive(num)
}`