import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import {NavLink} from "react-router-dom";
import '../../header.css'
const links = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
    {
        name:'Works',
        link:'/works'
    },
    {
        name:'Services',
        link:'/services'
    },
    {
        name:'Reviews',
        link:'/reviews'
    },
    {
        name: 'Contact',
        link: '/contact',
    },
    {
        name:'Contact Form',
        link:'/contact-form'
    }
];
const Header = () => {
    return (
        <React.Fragment>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top" id="banner">
                    <div className="container">
                        <span className="grey-color"> &lt; </span>
                        <a className="navbar-brand" href="#"><span>Aldeek</span></a>
                        <span className="grey-color">/&gt;</span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav ml-auto">
                                {links.map(link => (
                                    <li className="nav-item" key={link.name}>
                                        <NavLink activeClassName="active_link" to={link.link} className="nav-link">
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
