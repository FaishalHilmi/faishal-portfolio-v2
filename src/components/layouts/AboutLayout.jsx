import { motion } from "framer-motion";

export default function AboutLayout() {
  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotate: -10,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="about-wrapper grid grid-cols-1 lg:grid-cols-3 pb-72 lg:pb-52 relative">
      <div className="lg:col-span-2">
        <h1 className="text-[40px] md:text-5xl lg:text-6xl leading-tight mb-10 lg:mb-12 text-transparent font-figtree font-extrabold bg-clip-text bg-gradient-to-r from-secondary via-secondary-soft to-accent-info">
          Get to know me
        </h1>
        <div className="description flex flex-col gap-6 font-medium lg:text-xl">
          <span>
            Hello! My name is Faishal Hilmy Fadhilah Ginting, a Computer Science
            student at Universitas Negeri Medan with a keen interest in Web
            Development.
          </span>
          <span>
            I have 2 years of experience in developing websites using ReactJS,
            ExpressJS, and Laravel, and have participated in the Bangkit Academy
            programme by Google, GoTo, and Traveloka.
          </span>
          <span>
            Outside of coding, I enjoy discussing and collaborating to create
            technology solutions that have a real impact.
          </span>
        </div>
      </div>
      <div className="col-span-1 absolute left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 lg:right-0 -bottom-2">
        <motion.img
          src="/images/memoji-hi.png"
          alt="emoji-hi"
          className="w-48 lg:w-80"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}
