import { Link } from "react-router-dom";
import { highlightPortfolio } from "../../../data/projects";
import Card from "../ui/Card";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import AnimatedText from "../ui/AnimatedText";

export default function ProjectLayout() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="project-wrapper">
      <div className="header lg:flex justify-between items-center mb-14 lg:mb-24">
        <div className="mb-7 lg:mb-0">
          <div className="flex gap-2 mb-2.5 lg:mb-3.5">
            <span className="hidden lg:block lg:text-5xl">🛠️</span>
            <h2 className="text-[60px] leading-tight pb-1.5 lg:text-6xl text-transparent font-figtree font-extrabold bg-clip-text bg-gradient-to-r from-secondary via-secondary-soft to-accent-info">
              Portfolio Highlights
            </h2>
          </div>
          <AnimatedText
            el="span"
            text="Here are some of my recent projects that highlight my skills in web development."
            className="lg:text-xl font-medium"
            once={true}
            triggerOnView={true}
          />
        </div>
        <div className="action">
          <Link to="/projects">
            <div className="relative rounded-full font-semibold bg-gradient-to-r from-white to-primary-light p-[2px] w-fit">
              <span className="block rounded-full px-6 py-3 text-sm bg-white">
                <span className="flex items-center gap-2 lg:text-xl">
                  View All Projects{" "}
                  <span className="text-2xl text-white bg-gradient-custom p-1.5 rounded-full">
                    <MdOutlineArrowOutward />
                  </span>
                </span>
              </span>
            </div>
          </Link>
        </div>
      </div>
      <motion.div
        className="card-wrapper grid lg:grid-cols-2 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {highlightPortfolio.map((portfolio, index) => (
          <Card key={index} index={index} {...portfolio} />
        ))}
      </motion.div>
    </div>
  );
}
