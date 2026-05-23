import SectionShell from "./SectionShell.jsx";
import { softSkills, technicalSkills } from "../data/skills.js";

function Skills() {
  return (
    <SectionShell id="skills" eyebrow="Skills" title="Technical Skills">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl font-bold">Tech</h2>
          <p className="text-[var(--color-muted-text)]">
            {technicalSkills.join(" / ")}
          </p>
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold">Soft Skills</h2>
          <p className="text-[var(--color-muted-text)]">{softSkills.join(" / ")}</p>
        </div>
      </div>
    </SectionShell>
  );
}

export default Skills;
