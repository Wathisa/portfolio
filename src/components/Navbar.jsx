function Navbar({ navItems, activeSection, onNavigate }) {
  return (
    <header className="portfolio-nav">
      <nav className="mx-auto flex h-[var(--nav-height)] w-full max-w-7xl items-center justify-between gap-4 px-4 md:px-10">
        <a
          href="#home"
          className="font-logo shrink-0 text-2xl text-[var(--color-muted-blue)] md:text-4xl"
          aria-label="Simplydesign home"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("home");
          }}
        >
          Simplydesign
          <span className="text-[#efbb58]">*</span>
        </a>

        <div className="nav-links flex min-w-0 items-center gap-3 overflow-x-auto py-2 md:gap-7">
          {navItems.map((item) => (
            <a
              key={item.sectionId}
              href={`#${item.sectionId}`}
              className={`font-heading shrink-0 rounded-full px-3 py-1 text-xl font-bold transition-colors md:px-4 md:text-2xl ${
                activeSection === item.sectionId
                  ? "bg-[var(--color-soft-blue)] text-[var(--color-muted-blue)]"
                  : "hover:bg-[rgba(220,235,240,0.45)] hover:text-[var(--color-muted-blue)]"
              }`}
              aria-current={
                activeSection === item.sectionId ? "page" : undefined
              }
              onClick={(event) => {
                event.preventDefault();
                onNavigate(item.sectionId);
              }}
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
