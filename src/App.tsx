import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PowerBI from "./components/PowerBI";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <a
        href="#topo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[200] focus:bg-white focus:text-navy-900 focus:px-4 focus:py-2 focus:rounded-md"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <PowerBI />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
