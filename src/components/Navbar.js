import React from "react";

export default function Navbar() {
  return (
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo" />
    </a>

    <a href="/" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a href="/" className="navbar-item">
        Inicio
      </a>

      <a href="/" className="navbar-item">
        Casos de Exito
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a href="/" className="navbar-link">
          Quienes Somos
        </a>

        <div className="navbar-dropdown">
          <a href="/" className="navbar-item">
            Equipo
          </a>
          <a href="/" className="navbar-item">
            Newsletter
          </a>
          <hr className="navbar-divider" />
          <a href="/" className="navbar-item">
            Contacto
          </a>
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