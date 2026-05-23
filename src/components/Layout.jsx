import Navbar from "./Navbar.jsx";

function Layout({ children }) {
  return (
    <div className="page-shell">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
