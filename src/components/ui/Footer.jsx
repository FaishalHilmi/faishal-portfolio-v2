import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { forwardRef } from "react"; // Tambahkan import ini
import AnimatedText from "./AnimatedText";

// Bungkus komponen Footer dengan forwardRef
const Footer = forwardRef((props, ref) => {
  return (
    <footer
      id="contact"
      className="bg-gradient-pink bg-cover font-figtree relative"
      ref={ref} // Tautkan ref di sini
    >
      <div className="h-1 bg-gradient-to-r from-accent-info to-secondary"></div>
      <img
        src="/images/memoji-left.png"
        alt="Memoji"
        className="hidden lg:block w-[200px] absolute bottom-0 left-1/2 -translate-x-1/2"
      />
      <div className="px-5 md:px-16 lg:px-36 py-12 md:py-20 lg:py-24">
        <div className="footer-wrapper text-white">
          <AnimatedText
            el="h3"
            text="Connect and follow my social media to stay updated on my journey!"
            className="text-[32px] md:text-[52px] lg:text-[82px] leading-tight font-bold mb-12 lg:mb-14"
            once={true}
            triggerOnView={true}
          />
          <div className="mb-24 lg:mb-14">
            <div className="social-media mb-20 lg:mb-0 z-50">
              <ul className="lg:text-lg font-medium flex flex-col gap-2">
                <li>
                  <a
                    href="https://www.instagram.com/faisalmii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:underline"
                  >
                    <FaInstagram className="text-xl" /> <span>@faisalmii</span>
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/faishalhilmyfad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:underline"
                  >
                    <FaLinkedinIn className="text-xl" />{" "}
                    <span>Faishal Hilmy Fadhilah Ginting</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 hover:underline">
                  <a
                    href="https://www.linkedin.com/in/faishalhilmyfad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <FaGithub className="text-xl" /> <span>FaishalHilmi</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="memoji lg:hidden relative w-full z-40">
              <img
                src="/images/memoji-left.png"
                alt="Memoji"
                className="w-20 md:w-28 absolute md:left-72 right-14 bottom-0"
              />
              <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>
          </div>
          <div>
            <span className="font-medium font-satoshi lg:text-lg">
              ❤️ Crafted with joy by{" "}
              <span className="font-bold">Faisal Hilmy.</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
