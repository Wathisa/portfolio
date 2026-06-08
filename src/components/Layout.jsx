import Navbar from "./Navbar.jsx";
import FooterNote from "./FooterNote.jsx";

function Layout({ children, navItems, activeSection, onNavigate }) {
  return (
    <div className="page-shell">
      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        onNavigate={onNavigate}
      />
      {children}
      <footer className="site-footer">
        <FooterNote />
      </footer>
    </div>
  );
}

export default Layout;
