import ProjectsLayout from "../components/layouts/ProjectsLayout";
import Card from "../components/ui/Card";
import AnimatedText from "../components/ui/AnimatedText";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { portfolios } from "../../data/projects";
import { motion } from "framer-motion";

export default function projects() {
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
    <ProjectsLayout>
      <section className="px-5 md:px-16 lg:px-36 pt-10 lg:pt-20 pb-16 lg:pb-24 relative overflow-hidden">
        <img
          src="/images/blobs-gradient.png"
          alt="blobs"
          className="absolute w-[700px] md:w-[1500px] lg:w-full max-w-none -top-56 md:-top-[900px] lg:-top-[900px] left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 z-10 opacity-75"
        />
        <img
          src="/images/full-square.png"
          alt="square"
          className="absolute w-[850px] md:w-full max-w-none z-0 left-0 top-0"
        />
        <Link to="/" className="w-fit block relative z-30">
          <div className="p-3 w-fit rounded-full bg-white/30 backdrop-blur-md shadow-light">
            <FaArrowLeft className="text-primary-light lg:text-xl" />
          </div>
        </Link>
        <div className="relative z-50 mt-11">
          <div className="header flex flex-col gap-2.5 md:gap-7 mb-16">
            <h1 className="text-5xl md:text-7xl text-center text-transparent font-bold leading-tight md:leading-snug bg-clip-text bg-gradient-to-br from-primary-dark to-primary">
              All projects I’ve worked on
            </h1>
            <AnimatedText
              el="span"
              text="Every project is a tangible manifestation of the ideas, experiments, and collaborations that I have built to provide impactful technological solutions."
              className="block text-center text-lg md:text-[22px] font-medium"
            />
          </div>
          <motion.div
            className="card-wrapper grid lg:grid-cols-2 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {portfolios.map((portfolio, index) => (
              <Card key={index} index={index} {...portfolio} />
            ))}
          </motion.div>
        </div>
      </section>
    </ProjectsLayout>
  );
}
