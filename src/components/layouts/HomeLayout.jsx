import { forwardRef } from "react";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

const HomeLayout = forwardRef(
  ({ children, activeLink, setActiveLink }, ref) => {
    return (
      <div>
        <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
        <main className="font-satoshi text-primary-dark bg-base">
          {children}
        </main>
        <Footer contactRef={ref} />
      </div>
    );
  }
);

export default HomeLayout;
