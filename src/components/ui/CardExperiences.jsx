import { motion } from "framer-motion";

export default function CardExperiences({ role, company, location, date }) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(5px)",
      transform: "translateZ(0)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transform: "translateZ(0)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="relative bg-gradient-to-r from-transparent via-primary-light to-transparent pb-[2px] w-full"
      variants={cardVariants}
    >
      <div className="block py-5 lg:py-12 bg-base">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 md:items-center">
          <div className="md:col-span-2">
            <h4 className="text-[22px] md:text-3xl lg:text-4xl font-semibold mb-1 md:mb-3">
              {role}
            </h4>
            <span className="text-lg md:text-[22px] text-primary-dark font-medium opacity-80">
              {company} - {location}
            </span>
          </div>
          <div className="col-span-1 md:text-end">
            <span className="text-[26px] md:text-3xl lg:text-4xl text-primary-light font-semibold">
              {date}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
