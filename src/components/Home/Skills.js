import Skill from "../../Elements/Skill"
import SvgIcon, {
    cssIcon,
    htmlIcon,
    javascriptIcon,
    nextjsIcon,
    nodejsIcon,
    reactIcon,
    sassIcon,
    tailwindIcon,
} from '../svg-icon';
import Title from "../../Elements/Title";

const skills = [
    {
        image: <SvgIcon className="svg-skill-icon" title="JavaScript logo" d={javascriptIcon} viewBox="0 0 50 50" />,
        title: "Javascript",
        hoverClassName: "group-hover:text-[#F0DB4F]"
    },
    {
        image: <SvgIcon className="svg-skill-icon" title="HTML logo" d={htmlIcon} viewBox="0 0 50 50" />,
        title: "Html",
        hoverClassName: "group-hover:text-[#E34C26]"
    },
    {
        image: <SvgIcon className="svg-skill-icon" title="CSS logo" d={cssIcon} viewBox="0 0 128 128" />,
        title: "Css",
        hoverClassName: "group-hover:text-[#2965F1]"
    },
    {
        image: <SvgIcon className="svg-skill-icon" title="React.js logo" d={reactIcon} viewBox="0 0 50 50" />,
        title: "React",
        hoverClassName: "group-hover:text-[#61DBFB]"
    },
    {
        image: <SvgIcon className="svg-skill-icon" title="Node.js logo" d={nodejsIcon} viewBox="0 0 32 32" />,
        title: "Node",
        hoverClassName: "group-hover:text-[#3C873A]"
    },
    {
        image: <SvgIcon className="svg-skill-icon" title="Sass logo" d={sassIcon} viewBox="0 0 50 50" />,
        title: "Sass",
        hoverClassName: "group-hover:text-[#CC6699]"
    },
    {
        image: <SvgIcon className="svg-skill-icon" title="Next.js logo" d={nextjsIcon} viewBox="0 0 48 48" />,
        title: "NextJs",
        hoverClassName: "group-hover:text-gray-500"
    },
    // {
    //     image: <Graphql />,
    //     title: "GraphQL",
    // },
    {
        image: <SvgIcon className="svg-skill-icon" title="Tailwind CSS logo" d={tailwindIcon} viewBox="0 0 64 64" />,
        title: "Tailwind-css",
        hoverClassName: "group-hover:text-[#06B6D4]"
    },
]

export default function Skills() {
    return (
        <section className="flex flex-wrap overflow-hidden mt-12">
            <div>
                <Title title="Technical Skills" />
                <h4 className="py-8">Here are some of the technologies and tools I'm proficient and comfortable with:</h4>
            </div>
            {
                skills.map((skill, index) => {
                    return <Skill key={index} image={skill.image} title={skill.title} hoverClassName={skill.hoverClassName} />
                })
            }
        </section>
    )
}
