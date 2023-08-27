import './Summary.css'
import { FC } from "react";

interface HeaderProps {
	header: string
}
interface ContentProps {
	status: string
	name: string
	comment: string
}


const Summary = () => {

	const Header: FC<HeaderProps> = ({header}) => <h4 className={`header`}>{header}</h4>

	const Content: FC<ContentProps> = ({status, name, comment}) => <div className="content">
		<div className="cell">{status}</div>
		<div className="cell">{name}</div>
		<div className="cell">{comment}</div>
	</div>

	const MockContent = () => <div className="content">
		<div className="cell error" title={`ERROR`}>ERROR</div>
		<div className="cell error" title={`ERROR`}>ERROR</div>
		<div className="cell error" title={`ERROR`}>Something went wrong...</div>
	</div>

	return <div className={ `Summary` }>
		<section className={`section`}>
			<Header header={`My summary`}/>
		</section>
		<section className={`section`}>
			<div className="content">
				<div className="cell head" title={`Achievement`}>Achievement</div>
				<div className="cell head" title={`Skill`}>Skill</div>
				<div className="cell head" title={`Comment`}>Comment</div>
			</div>
		</section>
		<section className={`section`}>
			<Header header={`Front-end development`}/>
			<Content status={`+`} name={`JavaScript`} comment={`Everything has a beginning...`} />
			<Content status={`+`} name={`TypeScript`} comment={`Typisation matter!`} />
			<Content status={`+`} name={`CSS, SASS/SCSS`} comment={`Advanced selectors and module components`} />
			<Content status={`+`} name={`HTML/HTML5`} comment={`It can be semantic and logic!`} />
			<Content status={`+`} name={`Feature-Sliced design`} comment={`Divide and conquer!`} />
			<Content status={`+`} name={`Custom architectures`} comment={`It can be module and smart!`} />
		</section>
		<section className={`section`}>
			<Header header={`Back-End development`}/>
			<Content status={`+`} name={`NodeJS`} comment={`JavaScript everywhere!`} />
			<Content status={`+`} name={`Express`} comment={`Can you do API faster?`} />
			<Content status={`+`} name={`MongoDB`} comment={`Where is my users id?`} />
			<Content status={`+`} name={`MVC`} comment={`Three for one. That is. That shows. That controls.`} />
			<MockContent />
			<Content status={`-`} name={`SQL`} comment={`Haven't practice :(`} />
		</section>
		<section className={`section`}>
			<Header header={`Full-Stack development`}/>
			<Content status={`-`} name={`Next`} comment={`This one or Angular`} />
			<Content status={`-`} name={`Angular`} comment={`This one or Next`} />
			<MockContent />
			<Content status={`-`} name={`Nest`} comment={`I love full-stack development ;)`} />
		</section>
		<section className={`section`}>
			<Header header={`Web Engineering`}/>
			<Content status={`+`} name={`Front-End`} comment={`I can do it beautiful!`} />
			<Content status={`+-50%`} name={`Back-End`} comment={`We need more steps...`} />
			<Content status={`-`} name={`Architecture`} comment={`It can be reliably, but not yet ;)`} />
			<Content status={`-`} name={`Security`} comment={`Your data reliably buried! Can be...`} />
			<Content status={`-`} name={`Optimisation`} comment={`Can I do it faster? I want.`} />
		</section>
		<section className={`section`}>
			<Header header={`Soft skills and languages`}/>
			<MockContent />
			<Content status={`+`} name={`Smiley`} comment={`Be positive!`} />
			<Content status={`+`} name={`Communicative`} comment={`Be helpful and ask for help!`} />
			<Content status={`+`} name={`Determined`} comment={`Just do it!`} />
			<Content status={`+`} name={`Disciplined`} comment={`Small steps for big goals!`} />
			<MockContent />
			<Content status={`+`} name={`English`} comment={`Hi there!`} />
			<Content status={`+`} name={`Polish`} comment={`Siemanko!`} />
			<Content status={`+`} name={`Russian`} comment={`Здаров!`} />
		</section>
	</div>
};

export default Summary;