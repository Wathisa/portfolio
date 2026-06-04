import SectionShell from "./SectionShell.jsx";
import avatarHero from "../assets/images/avatar-hero.png";

function Hero() {
  return (
    <SectionShell
      id="home"
      cardClassName="hero-shell-card"
      contentClassName="hero-shell-content"
    >
      <div className="hero-grid">
        <div className="hero-image-card">
          <div className="hero-image-frame">
            <img
              src={avatarHero}
              alt="Portrait illustration of Sign"
              className="hero-image"
            />
          </div>
        </div>

        <div className="hero-content-card">
          <div className="hero-content-header">
            <h1 className="hero-title">Hi, I&apos;m Sign</h1>
            <span className="hero-title-star" aria-hidden="true">
              ☆
            </span>
          </div>

          <div className="hero-role-row">
            <span className="hero-role-badge">Junior </span>
            <span className="hero-role">Software Developer</span>
          </div>

          <div className="hero-divider" />

          <p className="hero-description">
            I build clean, user-friendly web experiences with a focus on
            usability, performance, and thoughtful details. With a background in
            web design, I enjoy turning ideas into simple, meaningful, and
            well-structured digital products.
          </p>

          <div className="hero-cta-wrap">
            <a href="#projects" className="hero-cta">
              Let&apos;s build something great!
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default Hero;
