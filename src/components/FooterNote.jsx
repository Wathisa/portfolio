function FooterNote() {
  const year = new Date().getFullYear();

  return (
    <p className="footer-note">
      &copy; {year} Simplydesign. All rights reserved.
    </p>
  );
}

export default FooterNote;
