import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import SectionShell from "./SectionShell.jsx";
import { projects } from "../data/projects.js";

function Projects() {
  return (
    <SectionShell
      id="projects"
      cardClassName="projects-shell-card"
      contentClassName="projects-shell-content"
    >
      <div className="projects-header">
        <p className="projects-kicker">Selected Work</p>
        <h2 className="projects-heading">Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-description">{project.description}</p>

            <div className="project-stack">
              {project.stack.map((item) => (
                <span key={item} className="project-stack-pill">
                  {item}
                </span>
              ))}
            </div>

            <div className="project-card-actions">
              <a
                href={project.demoUrl}
                className="project-action project-action-primary"
                target="_blank"
                rel="noreferrer"
                aria-label={`Open live demo for ${project.title}`}
              >
                <LuExternalLink className="project-action-icon" />
                <span>Live Demo</span>
              </a>

              <a
                href={project.repoUrl}
                className="project-action project-action-secondary"
                target="_blank"
                rel="noreferrer"
                aria-label={`Open GitHub repository for ${project.title}`}
              >
                <FaGithub className="project-action-icon" />
                <span>GitHub</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export default Projects;
