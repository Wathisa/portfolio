import Navbar from "./Navbar.jsx";

function Layout({ children, navItems, activeSection, onNavigate }) {
  return (
    <div className="page-shell">
      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        onNavigate={onNavigate}
      />
      {children}
    </div>
  );
}

export default Layout;
