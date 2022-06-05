import React from "react";
import { NavLink } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { authUser, theme } from "../store";

function NavBar(props) {
  const [currentTheme, setCurrentTheme] = useRecoilState(theme);
  const { user } = useRecoilValue(authUser);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/users">
                User
              </NavLink>
            </div>
            <div className="navbar-nav ms-auto">
              <NavLink className="nav-link" to="/">
                {user.name}
              </NavLink>
              <a
                onClick={(e) => setCurrentTheme(!currentTheme)}
                value={currentTheme}
                className="nav-link"
              >
                <i
                  className={`bi ${
                    currentTheme ? "bi-sun-fill" : "bi-moon-fill"
                  }`}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container py-4">{props.children}</div>
    </div>
  );
}

export default NavBar;
