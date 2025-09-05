import { motion } from "framer-motion";

export default function Card({
  title,
  description,
  image,
  link,
  icons,
  index,
}) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
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
    <motion.a
      href={link}
      target="_blank"
      className={`card col-span-1 bg-cover bg-no-repeat px-5 pt-5 pb-7 md:pb-5 rounded-[20px] shadow-lg hover:shadow-xl transform hover:scale-[1.01] transition-all duration-300 ease-in-out ${
        index % 2 === 0 ? "bg-gradient-yellow" : "bg-gradient-purple"
      }`}
      variants={cardVariants}
      whileHover={{ scale: 1.01, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex flex-col md:flex-row-reverse items-center gap-5 md:gap-10">
        <div className="image overflow-hidden rounded-[12px] md:w-5/12 md:h-[216px]">
          <img
            src={image}
            alt={`${title} preview`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text text-white md:w-2/3 flex flex-col gap-5">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <span className="font-medium">{description}</span>
          <div className="bg-gradient-to-r from-white to-transparent h-[2px]" />

          <div className="flex items-center gap-3 text-white">
            {icons?.map((icon, index) => (
              <span key={index} className="text-4xl">
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}
