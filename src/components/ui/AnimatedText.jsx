import { motion } from "framer-motion";

const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  // Tambahkan prop baru ini
  triggerOnView = false,
  once = false,
  ...props
}) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1 * i,
      },
    }),
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: "20px",
      filter: "blur(5px)",
      transform: "translateZ(0)",
    },
    visible: {
      opacity: 1,
      y: "0px",
      filter: "blur(0px)",
      transform: "translateZ(0)",
      transition: {
        duration: 0.6,
        ease: [0.17, 0.55, 0.55, 1],
      },
    },
  };

  // Tentukan properti animasi berdasarkan `triggerOnView`
  const animationProps = triggerOnView
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: once, amount: 0.8 },
      }
    : {
        initial: "hidden",
        animate: "visible",
      };

  return (
    <Wrapper className={className}>
      <motion.span
        variants={containerVariants}
        // Gunakan properti animasi yang sudah ditentukan
        {...animationProps}
        {...props}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block whitespace-nowrap mr-[0.25em]"
          >
            {word + " "}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
