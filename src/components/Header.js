import React from 'react';
import {Link, useLocation} from 'react-router-dom'


function Header(props) {
    const location = useLocation();
  return (
    <ul class="nav nav-tabs nav-justified">
    <li class="nav-item">
    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
    </li>
    <li class="nav-item">
    <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
        Projects
        </Link>
    </li>
    <li class="nav-item">
    <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
         Contact
        </Link>
    </li>
  </ul>
  );
}

export default Header;
