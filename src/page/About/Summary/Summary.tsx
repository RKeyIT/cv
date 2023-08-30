import './Summary.css'
import { FC, ReactNode } from "react";
import IconAccept from "../../../shared/IconAccept/IconAccept";
import IconCross from "../../../shared/IconCross/IconCross";
import IconProgress from "../../../shared/IconProgress/IconProgress";

interface HeaderProps {
	header: string
}
interface ContentProps {
	status: string | ReactNode
	name: string
	comment: string
}


const Summary = () => {

	const Header: FC<HeaderProps> = ({header}) => <h4 className={`header`}>{header}</h4>

	const Content: FC<ContentProps> = ({status, name, comment}) => <div className="content">
		<div className="cell status">{status}</div>
		<div className="cell name">{name}</div>
		<div className="cell comment">{comment}</div>
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
			<Content status={ <IconAccept /> } name={`JavaScript`} comment={`Everything has a beginning...`} />
			<Content status={ <IconAccept /> } name={`TypeScript`} comment={`Typisation matter!`} />
			<Content status={ <IconAccept /> } name={`CSS, SASS/SCSS`} comment={`Advanced selectors and module components`} />
			<Content status={ <IconAccept /> } name={`HTML/HTML5`} comment={`It can be semantic and logic!`} />
			<Content status={ <IconAccept /> } name={`Feature-Sliced design`} comment={`Divide and conquer!`} />
			<Content status={ <IconAccept /> } name={`Custom architectures`} comment={`It can be module and smart!`} />
		</section>
		<section className={`section`}>
			<Header header={`Back-End development`}/>
			<Content status={ <IconAccept /> } name={`NodeJS`} comment={`JavaScript everywhere!`} />
			<Content status={ <IconAccept /> } name={`Express`} comment={`Can you make API faster?`} />
			<Content status={ <IconAccept /> } name={`MongoDB`} comment={`Where is my users id?`} />
			<Content status={ <IconAccept /> } name={`MVC`} comment={`Three for one. That is. That shows. That controls.`} />
			<MockContent />
			<Content status={ <IconCross /> } name={`SQL`} comment={`Haven't practice :(`} />
		</section>
		<section className={`section`}>
			<Header header={`Full-Stack development`}/>
			<Content status={ <IconCross /> } name={`Next`} comment={`This one or Angular`} />
			<Content status={ <IconCross /> } name={`Angular`} comment={`This one or Next`} />
			<MockContent />
			<Content status={ <IconCross /> } name={`Nest`} comment={`I love full-stack development ;)`} />
		</section>
		<section className={`section`}>
			<Header header={`Web Engineering`}/>
			<Content status={ <IconAccept /> } name={`Front-End`} comment={`I can do it beautiful!`} />
			<Content status={ <IconProgress /> } name={`Back-End`} comment={`We need more steps...`} />
			<Content status={ <IconProgress /> } name={`Architecture`} comment={`It can be reliably, but not yet ;)`} />
			<Content status={ <IconCross /> } name={`Security`} comment={`Your data reliably buried! Can be...`} />
			<Content status={ <IconCross /> } name={`Optimisation`} comment={`Can I do it faster? I want.`} />
		</section>
		<section className={`section`}>
			<Header header={`Soft skills and languages`}/>
			<MockContent />
			<Content status={ <IconAccept /> } name={`Smiley`} comment={`Be positive!`} />
			<Content status={ <IconAccept /> } name={`Communicative`} comment={`Be helpful and ask for help!`} />
			<Content status={ <IconAccept /> } name={`Determined`} comment={`Just do it!`} />
			<Content status={ <IconAccept /> } name={`Disciplined`} comment={`Small steps for big goals!`} />
			<MockContent />
			<Content status={ <IconAccept /> } name={`English`} comment={`Hi there!`} />
			<Content status={ <IconAccept /> } name={`Polish`} comment={`Siemanko!`} />
			<Content status={ <IconAccept /> } name={`Russian`} comment={`Здаров!`} />
		</section>
	</div>
};

export default Summary;