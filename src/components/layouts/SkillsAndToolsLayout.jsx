import { skillsAndTools } from "../../../data/skillsAndTools";
import AnimatedText from "../ui/AnimatedText";

export default function SkillsAndToolsLayout() {
  return (
    <div className="skills-tools-wrapper">
      <div className="px-5 md:px-16 lg:px-36">
        <h2 className="uppercase text-center text-lg md:text-xl font-bold mb-5">
          Skills & Tools
        </h2>
        <AnimatedText
          el="h3"
          text="Here are the technologies and tools I enjoy working with"
          className="text-center text-3xl font-bold mb-16 md:mb-20"
          once={true}
          triggerOnView={true}
        />
      </div>
      <div className="py-5 md:py-7 border bg-gradient-custom overflow-hidden">
        <ul className="uppercase text-3xl text-white flex items-center gap-5 font-bold whitespace-nowrap animate-marquee">
          {[...skillsAndTools, ...skillsAndTools].map((skill, index) => (
            <li key={index} className="flex items-center gap-5">
              <span>{skill.title}</span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
