import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/Intro/Intro";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import DiabetesNotebook from "../JupyterNotebooks/Components/Diabetes/Diabetes";

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
