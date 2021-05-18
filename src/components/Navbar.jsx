import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/">
          <img src="/assets/logo.png" width="145" height="40" alt="logo" />
        </Link>
      
    <a href="/" role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
            <NavLink className="navbar-item" activeClassName="is-active" to="/">
            Clases Listas
            </NavLink>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/resource-picker"
            >
            Crea Clases
          </NavLink>
          </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a href="/" className="button is-primary">
            <strong>Regístrate </strong>
          </a>
          <a href="/" className="button is-light">
            Ingresa
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  );        
}