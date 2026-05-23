import SectionShell from "./SectionShell.jsx";

function Hero() {
  return (
    <SectionShell id="home" eyebrow="Portfolio" title="Hi, I'm Sign">
      <p className="max-w-2xl text-lg text-[var(--color-muted-text)]">
        Junior Software Developer with a web design background.
      </p>
    </SectionShell>
  );
}

export default Hero;
