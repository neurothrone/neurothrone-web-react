import React from "react";

import {Link, NavLink} from "react-router-dom";

function Header() {
  const getClass = ({isActive}: { isActive: boolean }): string => isActive ? "nav-active" : "";

  return (
    <header className="container">
      <Link to="/">
        <img
          className="logo"
          src="/assets/img/logo.jpg"
          alt="Neurothrone Logo"
          width={50}
          height={50}
          title="Neurothrone | Home"
        />
      </Link>

      <nav>
        <NavLink to="/" className={getClass}>Home</NavLink>
        <NavLink to="/about" className={getClass}>About</NavLink>
        <NavLink to="/contact" className={getClass}>Contact</NavLink>
        <NavLink to="/cv" className={getClass}>CV</NavLink>
        <NavLink to="/portfolio" className={getClass}>Portfolio</NavLink>
      </nav>
    </header>
  );
}

export default Header;