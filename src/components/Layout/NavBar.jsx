import React from 'react';
import Logo from '../../imgs/rwanda.png';

const NavBar = () => (
  <nav className="navbar navbar-expand-md bg-body py-3">
    <div className="container">
      <a className="navbar-brand d-flex align-items-center" href="/">
        <span>
          <img
            src={Logo}
            alt="Logo"
            width={40}
            height={40}
            style={{ paddingRight: 5 }}
          />
          Rwanda
        </span>
      </a>
      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navcol-1"
        type="button"
      >
        <span className="visually-hidden">Toggle navigation</span>
        <span className="navbar-toggler-icon" />
      </button>
      <div
        id="navcol-1"
        className="collapse navbar-collapse d-flex justify-content-end show"
      >
        <ul className="navbar-nav me-auto" />
      </div>
    </div>
  </nav>

);

export default NavBar;
