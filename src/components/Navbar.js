import React from 'react';

const Navbar = () => {
  return (
    <nav id="main-nav" className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          Steel Defect Detection
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Fetures
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#statistics">
                Statistics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#detect">
                Detect Defection
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
