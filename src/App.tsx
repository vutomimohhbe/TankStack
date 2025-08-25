import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import SolutionsSection from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "solutions", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <SolutionsSection />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
