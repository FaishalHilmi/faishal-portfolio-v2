import Footer from "../ui/Footer";

export default function ProjectsLayout({ children }) {
  return (
    <div>
      <main className="font-satoshi text-primary-dark bg-base">{children}</main>
      <Footer />
    </div>
  );
}
