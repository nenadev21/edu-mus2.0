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
    <div className="navbar-end" style={{padding:'8px 12px'}}>
      <NavLink className="navbar-item button is-primary" to="/sign-in">
        <strong>Regístrate </strong>
      </NavLink>
      <NavLink className="navbar-item buttons button is-light" to="/sign-up" style={{margin:'0 0 0 12px'}}>
      Ingresa
      </NavLink>
    </div>
  </div>
</nav>
  );        
}