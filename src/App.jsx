import { useEffect, useRef, useState } from "react";
import Layout from "./components/Layout.jsx";
import HorizontalScroll from "./components/HorizontalScroll.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

const navItems = [
  { label: "About", sectionId: "about" },
  { label: "Skills", sectionId: "skills" },
  { label: "Projects", sectionId: "projects" },
  { label: "Contact", sectionId: "contact" },
];

const sectionIds = ["home", ...navItems.map((item) => item.sectionId)];

function App() {
  const scrollRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");

  const navigateToSection = (sectionId, behavior = "smooth") => {
    const nextSection = sectionIds.includes(sectionId) ? sectionId : "home";
    const didScroll = scrollRef.current?.scrollToSection(nextSection, {
      behavior,
    });

    if (!didScroll) {
      return;
    }

    setActiveSection(nextSection);
    window.history.replaceState(null, "", `#${nextSection}`);
  };

  useEffect(() => {
    const syncSectionFromHash = () => {
      const currentHash = window.location.hash.replace("#", "");
      const nextSection = sectionIds.includes(currentHash)
        ? currentHash
        : "home";

      navigateToSection(nextSection, "auto");
    };

    syncSectionFromHash();
    window.addEventListener("hashchange", syncSectionFromHash);

    return () => {
      window.removeEventListener("hashchange", syncSectionFromHash);
    };
  }, []);

  return (
    <Layout
      navItems={navItems}
      activeSection={activeSection}
      onNavigate={navigateToSection}
    >
      <HorizontalScroll ref={scrollRef} onSectionChange={setActiveSection}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </HorizontalScroll>
    </Layout>
  );
}

export default App;
