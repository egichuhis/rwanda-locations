import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import Logo from '../../imgs/rwanda.png';

const NavBar = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-md bg-body py-3">
      <div className="container">
        {location.pathname !== '/' && (
          <Link to="/">
            <i className="fas fa-arrow-left fs-4" />
          </Link>
        )}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <span>
            <img
              alt="Logo"
              src={Logo}
              width={40}
              height={40}
              style={{ paddingRight: 5 }}
            />
            Rwanda
          </span>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navcol-1"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
        </button>
        <div
          id="navcol-1"
          className="collapse navbar-collapse d-flex justify-content-end"
        >
          <ul className="navbar-nav me-auto" />
        </div>
      </div>
    </nav>

  );
};

export default NavBar;
