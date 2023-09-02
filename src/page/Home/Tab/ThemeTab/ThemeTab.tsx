import CodeBlock from "../../../../shared/features/CodeBlock/CodeBlock";
import {
	states,
	effects,
	markup,
	imports,
	importsV2,
	contextV2,
	useThemeV2,
	themeProviderV2,
	ThemeV2, ThemeSwitcherImportsV2, ThemeSwitcherComponentV2
} from "./CodeExamples";
import TabVersionSwitcher from "../TabVersionSwitcher/TabVersionSwitcher";

const ThemeTab = () => {
	const V1 = () => <>
		<p>
			This section contains a micro-guide to create a custom theme switcher.
			Also it have unexpected features that I found randomly.
		</p>
		<p>
			Currently it's the most interesting from my solutions on this website.
			And it still have some tasks to achieve high level of implementation.
		</p>
		<p>
			So let's see
		</p>
		<section>
			<h4>
				In first it has a simple state controllers
			</h4>
			<CodeBlock code={ states } />
			<p>It's contains some variables that you will understand couple steps below</p>
		</section>
		<section>
			<h4>
				Simple effects for controlling theme panel
			</h4>
			<CodeBlock code={ effects } />
			<p>
				Here you can see buttons locker and theme auto-changer that bounded with current time
			</p>
			<p>
				Currently I think about hardcode of seconds in first effect. This bounded with timing of animation in css
				files
			</p>
		</section>
		<section>
			<h4>
				Little more interesting section of markup
			</h4>
			<CodeBlock code={ markup } />
			<p>
				As you can see it's simple markup with a common buttons that can be disabled.
				Also it has handlers that we saw above.
			</p>
			<p>
				Mostly interesting place of markup is the <b>theme</b> variable into <code>&lt;style&gt;</code> tags.
				<br />
				It's an implemented feature and an unresolved task in the same time.
				You will see this variables in the next code section.
			</p>
		</section>
		<section>
			<h4>
				Imports
			</h4>
			<CodeBlock code={ imports } />
			<p>
				We're import files as inline text! This is unexpected thing of this part.
				I doing this because it was AI tip of my IDE :)
			</p>
		</section>
		<section>
			<h4>
				Problems
			</h4>
			<p>
				I love this implementation, but it has some problems like code injection in header of project.
				This means that I have style tag nested in the couple of another tags. It can be problematic in the future.
				And I have some solutions as custom hook f.e. But it works not perfect. And I will work on it in future.
			</p>
		</section>
	</>
	const V2 = () => <>
		<section>
			<h4>
				Theme component has been moved to the application initialization level to app folder.
			</h4>
			<p>
				Motivation of this move was that component controllers must be available
				in other pages of application. That was a good idea to create <b>Context</b> and
				split <b>Theme</b> component on a few parts.
			</p>
		</section>
		<section>
			<h4>
				1. Context
			</h4>
			<h5>Imports</h5>
			<CodeBlock code={ importsV2 } />
			<p>
				The necessary functions and types have been added to the imports.
				But import css styles as inline string remains the same (<i>Random founded feature</i>).
			</p>
			<h5>Context creating</h5>
			<CodeBlock code={ contextV2 } />
			<p>
				<b>Context</b> creation using interface. It means that context will wait
				one string and four functions that will change themes.
				And this mock functions and variable was created as default values that will be changed later.
			</p>
			<h5>
				useTheme hook
			</h5>
			<CodeBlock code={ useThemeV2 } />
			<p>
				Create a custom hook for using theme functionality.
				It will contain theme variable and function theme-setters.
			</p>
			<h5>Theme Provider</h5>
			<CodeBlock code={ themeProviderV2 } />
			<p>
				It has pretty simple interface of props with ReactNode as a child for this provider-wrapper.
			</p>
			<p>
				And this component return ThemeProvider that we create in <b>Context creating</b> step.
				It has state with current theme, theme controllers
				and it also set this controllers and state as a <b>value</b> of provided context.
				That means that children components will have access to this values and can be use its.
			</p>
		</section>
		<section>
			<h4>2. Theme markup</h4>
			<CodeBlock code={ ThemeV2 } />
			<p>
				It is pretty simple component that use useTheme hook that we created earlier
				and useEffect hook to set theme based on the current time on client side.
			</p>
			<p>
				It returns tag <b>&#60;style&#62;</b> that contain css stylesheet as string.
				This string will be placed on first string of application.
			</p>
		</section>
		<section>
			<h4>3. ThemeSwitcher</h4>
			<p>
				Its a separate component that will create accessibility for clients
				to using theme switcher functionality.
			</p>

			<h5>Imports</h5>
			<CodeBlock code={ ThemeSwitcherImportsV2 } />
			<ol>
				<li>
					<b>useState</b> and <b>useEffect</b> hooks for disable switcher on a short time.
				</li>
				<li>
					<b>useTheme</b> hook to use switcher functionality.
				</li>
				<li>
					<b>2 css files</b> that contains global styles and <b>another one</b> with personal styles.
				</li>
				<li>
					And icons import that can be used to customize switcher.
				</li>
			</ol>

			<h5>Component</h5>
			<CodeBlock code={ ThemeSwitcherComponentV2 } />
			<p>
				In the previous version this component was contained <b>&#60;style&#62;</b> tag,
				but now its only buttons that can be placed anywhere in project.
			</p>
		</section>
	</>
	const components = [ <V1 />, <V2 /> ]

	return <div className={ `ThemeTab` }>
		<TabVersionSwitcher components={ components } name={ `Theme` } />
	</div>

};

export default ThemeTab;