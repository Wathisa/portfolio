import SectionShell from "./SectionShell.jsx";
import { experience } from "../data/experience.js";

function About() {
  return (
    <SectionShell id="about" eyebrow="About" title="About Me">
      <p className="max-w-2xl text-lg text-[var(--color-muted-text)]">
        {experience.summary}
      </p>
    </SectionShell>
  );
}

export default About;
