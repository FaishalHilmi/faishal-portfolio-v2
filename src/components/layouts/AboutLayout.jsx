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
        <h2 className="text-[40px] md:text-5xl lg:text-6xl leading-tight mb-10 lg:mb-12 text-transparent font-figtree font-extrabold bg-clip-text bg-gradient-to-r from-secondary via-secondary-soft to-accent-info">
          Get to know me
        </h2>
        <div className="description flex flex-col gap-6 font-medium lg:text-xl">
          <span>
            Hello! My name is{" "}
            <strong className="font-extrabold">
              Faishal Hilmy Fadhilah Ginting
            </strong>
            , a web developer with 2 years of experience. I focus on developing
            functional, responsive digital solutions that deliver optimal
            performance.
          </span>
          <span>
            My technical expertise focuses on website development. I am
            proficient in building frontends using ReactJS and managing backends
            using ExpressJS and Laravel.
          </span>
          <span>
            I am also an alumnus of the prestigious Bangkit Academy 2023
            program, a collaboration between Google, GoTo, and Traveloka. This
            experience has strengthened my ability to create measurable,
            industry-ready technology solutions.
          </span>
          <span>
            Outside of my academic and coding responsibilities, I enjoy
            discussing ideas, collaborating with teams, and constantly seeking
            opportunities to develop technologies that have a positive and
            tangible impact.
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
