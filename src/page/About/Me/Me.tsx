import './Me.css'

const Me = () => {
	return <div className={ `Me` }>
			<h3 className={`heading`}>
				Hi there! My name is <span className={`no-wrap`}>
					Raman&nbsp;Krytski
				</span>
			</h3>
			<p>
				I am a self-taught web developer experienced with technologies such as
				JavaScript, TypeScript, CSS and SASS/SCSS preprocessors, HTML and HTML5 semantic markup,
				the NodeJS platform, the React library, ES6 and earlier syntaxes of JS
				and much more interesting things :)
			</p>
			<p>
				It was interesting way from basic <a className={`text-link`} href={`https://www.linkedin.com/learning/`} target={`_blank`}>
				LinkedIn
			</a> and <a className={`text-link`} href={`https://stepik.org/`} target={`_blank`}>
				Stepik
			</a> courses to more challenging paths in the <a className={`text-link`} href={`https://rs.school/`} target={`_blank`}>
				RS School
			</a>
			</p>
			<p>
				And now I'm glad to say that I prepared to the real tasks in the real projects.
				As you can see, this page contains custom code as well as third-party libraries.
				I look on it like that, if I can get a good experience with writing some code
				to solve my tasks, I can do it by my hand. But if it's something like a thousand lines
				of code for media queries, I would prefer to use a library
				like <a className={`text-link`} href={`https://github.com/duskload/react-device-detect`} target={`_blank`}><code>
				react-device-detect</code></a> similar to what I did on this project.
			</p>
	</div>
};

export default Me;