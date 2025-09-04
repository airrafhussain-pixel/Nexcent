import '../App.css';
function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img className="logo" src="/Logo (1).png" alt="Website Logo" />
      </div>

      <nav className="header-nav">
        <p className="nav-link">Home</p>
        <p className="nav-link">Features</p>
        <p className="nav-link">Community</p>
        <p className="nav-link">Blog</p>
        <p className="nav-link">Pricing</p>
        <button className="nav-button">Register Now</button>
      </nav>
    </header>
  );
}

export default Header;
