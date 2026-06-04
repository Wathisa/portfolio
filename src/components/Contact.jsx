import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import SectionShell from "./SectionShell.jsx";
import { contactLinks } from "../data/contact.js";

const iconMap = {
  Email: LuMail,
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
};

function Contact() {
  return (
    <SectionShell
      id="contact"
      cardClassName="contact-shell-card"
      contentClassName="contact-shell-content"
    >
      <div className="contact-grid">
        <div className="contact-copy">
          <p className="contact-kicker">Contact</p>
          <h2 className="contact-heading">Let&apos;s Connect</h2>
          <p className="contact-description">
            I&apos;m open to new opportunities and collaborations. Let&apos;s create
            something meaningful together.
          </p>
        </div>

        <div className="contact-list">
          {contactLinks.map((item) => {
            const Icon = iconMap[item.label];

            return (
              <a
                key={item.label}
                href={item.label === "Email" ? `mailto:${item.value}` : `https://${item.value}`}
                className="contact-item"
                target={item.label === "Email" ? undefined : "_blank"}
                rel={item.label === "Email" ? undefined : "noreferrer"}
              >
                <span className="contact-item-icon-wrap">
                  <Icon className="contact-item-icon" />
                </span>
                <span className="contact-item-value">{item.value}</span>
              </a>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

export default Contact;
