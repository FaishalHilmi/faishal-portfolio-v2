import { Link } from "react-router-dom";
import AnimatedText from "../ui/AnimatedText";

export default function HeroLayout() {
  return (
    <div className="hero-wrapper z-50">
      <div className="headline flex flex-col gap-5 w-full md:w-[700px]">
        <h1 className="text-[54px] leading-tight md:text-7xl pb-1 text-center text-transparent font-figtree font-extrabold bg-clip-text bg-gradient-to-br from-primary-dark to-primary">
          Faishal Hilmy Fadhilah Ginting
        </h1>
        <AnimatedText
          el="p"
          text="👋 Hi, I’m A Passionate Website Developer with two years of hands-on experience"
          className="text-primary-dark md:text-xl text-center font-medium"
        />
      </div>
      <div className="call-to-action flex justify-center gap-2.5 mt-7">
        <Link to="/projects">
          <div className="relative rounded-full font-semibold text-white bg-gradient-to-r from-white to-accent-success p-[2px] w-fit">
            <span className="block rounded-full px-6 py-3 text-sm bg-[linear-gradient(90deg,#AD95EB,#7362E2,#5A66E1,#7FC5C5)]">
              📂 View Projects
            </span>
          </div>
        </Link>
        <a
          href="https://drive.google.com/file/d/1EgHuo7qji0SOPAFAaSbiQHyZeAfM8Uus/view?usp=sharing"
          target="_blank"
        >
          <div className="relative rounded-full font-semibold text-white bg-gradient-to-r from-white to-accent-success p-[2px] w-fit">
            <span className="block rounded-full px-6 py-3 text-sm bg-[linear-gradient(90deg,#AD95EB,#7362E2,#5A66E1,#7FC5C5)]">
              📄 View My CV
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
