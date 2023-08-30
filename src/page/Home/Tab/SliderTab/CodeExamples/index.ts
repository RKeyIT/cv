export const type =
`type Slide = 1 | 2 | 3 | 4`

export const state =
`const [active, setActive] = useState<Slide>(1)`

export const effect =
`useEffect(() => {
	const timer = 2 * 1000
	// TODO: Dangerous type assertion using "as" syntax
	const interval = setInterval(() => setActive((prev): Slide => (prev + 1) as Slide), timer)
	if(active > 4) {
		setActive(1)
		clearInterval(interval)
	}
	return () => clearInterval(interval)
}, [active])`