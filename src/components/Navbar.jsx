import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);


  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/">
          <img src="/assets/logo.png" alt="logo" width= "145"/>
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
            Tus clases listas
            </NavLink>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/resource-picker"
            >
            Encuentra recursos
          </NavLink>
          </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a href="/sign-up" className="button is-primary">
            <strong>Regístrate </strong>
          </a>
          <a href="/sign-in" className="button is-light">
            Ingresa
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  );        
}