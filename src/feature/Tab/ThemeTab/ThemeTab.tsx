import CodeBlock from "../../../shared/CodeBlock/CodeBlock";
import { states, effects, markup, imports } from "./CodeExamples";

const ThemeTab = () => {
	return <div className={ `ThemeTab` }>
		<h3>Welcome to the most interesting Theme tab!</h3>
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
				Currently I think about hardcode of seconds in first effect. This bounded with timing of animation in css files
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
				<br/>
				It's an implemented feature and an unresolved task in the same time.
				You will see this variables in the next code section.
			</p>
		</section>
		<section>
			<h4>
				Imports
			</h4>
			<CodeBlock code={imports} />
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
	</div>
};

export default ThemeTab;