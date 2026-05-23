function SectionShell({ id, eyebrow, title, children }) {
  return (
    <section id={id} data-section-id={id} className="section-shell">
      <div className="section-card p-6 md:p-10">
        {eyebrow ? (
          <p className="font-heading mb-2 text-xl font-bold text-[var(--color-muted-blue)]">
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h1 className="font-heading text-4xl font-bold md:text-5xl">{title}</h1>
        ) : null}
        {children ? <div className="mt-5">{children}</div> : null}
      </div>
    </section>
  );
}

export default SectionShell;
