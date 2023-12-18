import React from "react";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand logo-img" href="/">
            <img src="asset/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <h3 className="logo-heading">Home Owners Club</h3>
                </a>
              </li>
            </ul>
            <a href="/">
              <img src="asset/download.svg" alt="" className="change-btn" />
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
