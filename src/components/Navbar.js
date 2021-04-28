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
              Inicio
            </NavLink>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/successstories"
            >
              Casos de Exito
            </NavLink>
      <div className="navbar-item has-dropdown is-hoverable">
        <a href="/" className="navbar-link">
          Quienes Somos
        </a>
        <div className="navbar-dropdown">
          <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/team"
            >
              Equipo
            </NavLink>
          <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/newsletter"
            >
              Newsletter
            </NavLink>
          <hr className="navbar-divider" />
          <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/contactus"
            >
              Contactanos
            </NavLink>
        </div>
      </div>
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