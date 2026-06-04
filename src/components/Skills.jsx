import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  LuBookOpen,
  LuClock,
  LuLightbulb,
  LuMessageCircle,
  LuSearchCheck,
  LuUsers,
} from "react-icons/lu";
import { SiJavascript, SiMongodb, SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiFigma } from "react-icons/si";
import SectionShell from "./SectionShell.jsx";
import { softSkills, technicalSkills } from "../data/skills.js";

const technicalIconMap = {
  FaHtml5,
  FaCss3Alt,
  SiJavascript,
  FaReact,
  FaNodeJs,
  SiMongodb,
  FaGitAlt,
  SiTailwindcss,
  VscVscode,
  SiFigma,
};

const softIconMap = {
  LuLightbulb,
  LuMessageCircle,
  LuUsers,
  LuSearchCheck,
  LuBookOpen,
  LuClock,
};

function Skills() {
  return (
    <SectionShell
      id="skills"
      cardClassName="skills-shell-card"
      contentClassName="skills-shell-content"
    >
      <div className="skills-grid">
        <article className="skills-panel skills-panel-technical">
          <p className="skills-kicker">Tools I Use</p>
          <h2 className="skills-heading">Technical Skills</h2>

          <div className="skills-list skills-list-technical">
            {technicalSkills.map((skill) => {
              const Icon = technicalIconMap[skill.icon];

              return (
                <div key={skill.name} className="skill-card">
                  <div className="skill-card-icon-wrap">
                    <Icon className={`skill-card-icon ${skill.colorClass}`} />
                  </div>
                  <p className="skill-card-label">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </article>

        <article className="skills-panel skills-panel-soft">
          <p className="skills-kicker">How I Work</p>
          <h2 className="skills-heading">Soft Skills</h2>

          <div className="skills-list skills-list-soft">
            {softSkills.map((skill) => {
              const Icon = softIconMap[skill.icon];

              return (
                <div key={skill.name} className="skill-card">
                  <div className="skill-card-icon-wrap skill-card-icon-wrap-soft">
                    <Icon className="skill-card-icon skill-card-icon-soft" />
                  </div>
                  <p className="skill-card-label">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </SectionShell>
  );
}

export default Skills;
