export default function Header() {
    return (
      <header>
        <nav className="navbar container">
          <div className="logo">
            <img src="/RYDRLogo.png" alt="Logo"/>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  