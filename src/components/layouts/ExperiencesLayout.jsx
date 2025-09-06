import React from "react";
import { experiences } from "../../../data/experiences";
import CardExperiences from "../ui/CardExperiences";
import AnimatedText from "../ui/AnimatedText";
import { motion } from "framer-motion";

export default function ExperiencesLayout() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Jeda 0.2 detik antar setiap kartu
      },
    },
  };

  return (
    <div className="experience-wrapper">
      <div className="header mb-14">
        <div className="heading flex flex-col lg:flex-row gap-0 lg:gap-2 mb-2 lg:mb-4">
          <span className="text-[52px] lg:text-5xl">💼</span>
          <h1 className="text-[60px] leading-tight pb-1.5 lg:text-6xl text-transparent font-figtree font-extrabold bg-clip-text bg-gradient-to-r from-secondary via-secondary-soft to-accent-info">
            Experience
          </h1>
        </div>
        {/* AnimatedText sudah menggunakan triggerOnView, jadi ini akan berjalan saat di-scroll */}
        <AnimatedText
          el="span"
          text="Every experience is a valuable step that shapes expertise, strengthens teamwork skills, and fosters a spirit of continuous learning in the world of technology."
          className="lg:text-xl font-medium"
          once={true}
          triggerOnView={true}
        />
      </div>
      {/* Kunci: Gunakan motion.div dengan whileInView */}
      <motion.div
        className="card-experiences-wrapper"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Memicu animasi saat masuk viewport
        viewport={{ once: true, amount: 0.2 }} // Animasi sekali saja saat 20% terlihat
      >
        {experiences.map((experience, index) => (
          <CardExperiences key={index} {...experience} />
        ))}
      </motion.div>
    </div>
  );
}
