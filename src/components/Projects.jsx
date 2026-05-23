import SectionShell from "./SectionShell.jsx";
import { projects } from "../data/projects.js";

function Projects() {
  return (
    <SectionShell id="projects" eyebrow="Projects" title="Bootcamp Projects">
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-light-blue)] p-4"
          >
            <h2 className="font-heading text-2xl font-bold">{project.title}</h2>
            <p className="mt-2 text-sm text-[var(--color-muted-text)]">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export default Projects;
