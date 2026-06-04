import SectionShell from "./SectionShell.jsx";
import { experience } from "../data/experience.js";

function About() {
  return (
    <SectionShell
      id="about"
      cardClassName="about-shell-card"
      contentClassName="about-shell-content"
    >
      <div className="about-grid">
        <article className="about-summary-card">
          <p className="about-kicker">About</p>
          <h2 className="about-heading">About Me</h2>
          <p className="about-summary-text">{experience.summary}</p>

          <div className="about-traits">
            <a href="#" className="about-trait about-cv-link">
              Download CV
            </a>
          </div>
        </article>

        <article className="about-experience-card">
          <p className="about-kicker">Journey</p>
          <h2 className="about-heading">Experience &amp; Education</h2>

          <div className="about-timeline">
            {experience.items.map((item) => (
              <div key={`${item.year}-${item.title}`} className="about-timeline-row">
                <p className="about-timeline-year">{item.year}</p>
                <div>
                  <p className="about-timeline-title">{item.title}</p>
                  <p className="about-timeline-place">{item.place}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </SectionShell>
  );
}

export default About;
