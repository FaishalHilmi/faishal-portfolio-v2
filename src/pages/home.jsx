import { useState, useEffect, useRef } from "react";
import HomeLayout from "../components/layouts/HomeLayout";
import HeroLayout from "../components/layouts/HeroLayout";
import AboutLayout from "../components/layouts/AboutLayout";
import SkillsAndTools from "../components/layouts/SkillsAndToolsLayout";
import ProjectLayout from "../components/layouts/ProjectLayout";
import Experiences from "../components/layouts/ExperiencesLayout";

export default function Home() {
  const [activeLink, setActiveLink] = useState("");
  const [isScrollingFromClick, setIsScrollingFromClick] = useState(false);

  const aboutMeRef = useRef(null);
  const portfolioRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { name: "About Me", ref: aboutMeRef },
    { name: "Portfolio", ref: portfolioRef },
    { name: "Experience", ref: experienceRef },
    { name: "Contact Me", ref: contactRef },
  ];

  const handleSetActiveLink = (name) => {
    setActiveLink(name);
    setIsScrollingFromClick(true);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.75,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isScrollingFromClick) {
            const currentSection = sectionRefs.find(
              (s) => s.ref.current === entry.target
            );
            if (currentSection) {
              setActiveLink(currentSection.name);
            }
          }
        }
      });
    }, observerOptions);

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        setActiveLink("Contact Me");
      }

      if (isScrollingFromClick) {
        setTimeout(() => {
          setIsScrollingFromClick(false);
        }, 500);
      }
    };

    window.addEventListener("scroll", handleScroll);

    sectionRefs.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sectionRefs.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [sectionRefs, isScrollingFromClick]);

  return (
    <HomeLayout
      activeLink={activeLink}
      setActiveLink={handleSetActiveLink}
      contactRef={contactRef}
    >
      <section className="hero h-screen flex items-center justify-center px-5 md:px-36 relative overflow-hidden">
        <img
          src="/images/blobs-gradient.png"
          alt="blobs"
          className="absolute w-[700px] md:w-[1500px] lg:w-full max-w-none -top-56 md:-top-[900px] lg:-top-[900px] z-10 opacity-75 md:opacity-100"
        />
        <img
          src="/images/full-square.png"
          alt="square"
          className="absolute w-[850px] md:w-full max-w-none z-0"
        />
        <HeroLayout />
      </section>

      <section
        id="about-me"
        className="about px-5 md:px-16 lg:px-36 relative overflow-hidden"
        ref={aboutMeRef}
      >
        <img
          src="/images/blobs-gradient.png"
          alt="blobs"
          className="absolute w-full lg:w-[800px] max-w-none -bottom-32 md:-bottom-96 lg:top-0 lg:-right-32 left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 z-0"
        />
        <img
          src="/images/half-square.png"
          alt="square"
          className="absolute w-[700px] lg:w-[800px] max-w-none bottom-0 lg:top-0 lg:right-0 z-0"
        />
        <AboutLayout />
      </section>

      <section className="skills-tools pt-12 lg:pt-20">
        <SkillsAndTools />
      </section>

      <section
        id="portfolio"
        className="project px-5 md:px-16 lg:px-36 pt-12 lg:pt-20"
        ref={portfolioRef}
      >
        <ProjectLayout />
      </section>

      <section
        id="experience"
        className="experience px-5 md:px-16 lg:px-36 pt-12 pb-16 lg:py-24"
        ref={experienceRef}
      >
        <Experiences />
      </section>
    </HomeLayout>
  );
}
