import React from 'react';
import './components/NavBar.css';

function NavBar() {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul>
          <li>
              <a>Inicio</a>
          </li>
          <li>
              <a>Menú</a>
          </li>
          <li>
              <a>Contacto</a>
          </li>

        </ul>

      </nav>
    </header>
  )
}

export default NavBar;
