const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="portfolio-nav">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 md:px-10">
        <a
          href="#home"
          className="font-logo text-3xl text-[var(--color-muted-blue)] md:text-4xl"
          aria-label="Simplydesign home"
        >
          Simplydesign*
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-heading border-b-2 border-transparent text-2xl font-bold transition-colors hover:border-[var(--color-soft-blue)] hover:text-[var(--color-muted-blue)]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
