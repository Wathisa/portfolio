import SectionShell from "./SectionShell.jsx";
import FooterNote from "./FooterNote.jsx";
import { contactLinks } from "../data/contact.js";

function Contact() {
  return (
    <SectionShell id="contact" eyebrow="Contact" title="Let's Connect">
      <div className="space-y-3 text-[var(--color-muted-text)]">
        {contactLinks.map((item) => (
          <p key={item.label}>
            <span className="font-heading text-2xl font-bold text-[var(--color-text)]">
              {item.label}:{" "}
            </span>
            {item.value}
          </p>
        ))}
      </div>
      <FooterNote />
    </SectionShell>
  );
}

export default Contact;
