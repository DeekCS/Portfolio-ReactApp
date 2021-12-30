import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../../header.css';
const links = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Projects',
    link: '/works',
  },
  {
    name: 'Contact',
    link: '/contact',
  },

];

const Header = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      const nav = document.getElementById('banner');
      if (isTop) {
        nav.classList.remove('shrink');
      } else {
        nav.classList.add('shrink');
      }
    });
  });






  return (
    <React.Fragment>
      <header>
        <nav
          className="navbar navbar-expand-md shrink navbar-dark fixed-top"
          id="banner"
        >
          <div className="container">
            <span className="grey-color"> &lt; </span>
            <a className="navbar-brand" href="#">
              <span>Aldeek</span>
            </a>
            <span className="grey-color">/&gt;</span>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto">
                {links.map((link) => (
                  <li className="nav-item" key={link.name}>
                    <NavLink

                      to={link.link}
                      className="nav-link"
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
