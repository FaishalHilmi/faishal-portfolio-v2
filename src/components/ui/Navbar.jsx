import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About Me", href: "#about-me" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Experience", href: "#experience" },
  { name: "Contact Me", href: "#contact" },
];

export default function Navbar({ activeLink, setActiveLink }) {
  const [isActive, setIsActive] = useState(false);

  const handleMobileNavLinkClick = (itemHref, itemName) => {
    setActiveLink(itemName);
    setIsActive(false);

    setTimeout(() => {
      window.location.href = itemHref;
    }, 300);
  };

  return (
    <nav className="font-satoshi text-primary-dark flex justify-end md:justify-center w-full fixed px-5 md:px-0 z-[99] top-8 left-1/2 -translate-x-1/2">
      {/* Desktop Menu */}
      <div className="nav-link-desktop hidden md:block shadow-lg bg-white/40 backdrop-blur-sm p-3 rounded-full relative">
        <ul className="flex relative">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              className="relative rounded-full z-10"
              onClick={() => setActiveLink(item.name)}
            >
              <a
                href={item.href}
                className={`text-md lg:text-lg font-bold py-[10px] px-5 block relative z-10 transition-colors ${
                  activeLink === item.name ? "text-white" : ""
                }`}
              >
                {item.name}
              </a>
              {activeLink === item.name && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary via-primary-light to-accent-info"
                  style={{ zIndex: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="flex flex-col justify-end items-end w-full md:hidden">
        <div className="md:hidden mb-2">
          <motion.button
            aria-label={isActive ? "Close menu" : "Open menu"}
            onClick={() => setIsActive(!isActive)}
            className="bg-white/40 backdrop-blur-sm p-3 rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isActive ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                >
                  <AiOutlineClose className="text-2xl text-primary-light" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                >
                  <HiMenu className="text-2xl text-primary-light" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
        <AnimatePresence>
          {isActive && (
            <motion.div
              className="nav-link-mobile md:hidden w-full rounded-lg p-4 bg-white/40 backdrop-blur-sm shadow-lg"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <ul className="flex flex-col text-center">
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hover:bg-gradient-to-r from-secondary via-primary-light to-accent-info hover:text-white rounded-lg"
                  >
                    <a
                      href={item.href}
                      onClick={() =>
                        handleMobileNavLinkClick(item.href, item.name)
                      }
                      className="text-md lg:text-lg font-bold py-[10px] px-5 block"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
