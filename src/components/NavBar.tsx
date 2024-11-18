import { Link } from "react-router-dom";
import styled from "./NavBar.module.css";

import React from "react";

export default function NavBar() {
  return (
    <div>
      <nav
        className={
          styled.navegacion + ` navbar navbar-expand-lg bg-body-tertiary`
        }
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                  <Link  to={"/"} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
               <Link  to={"/favoritos"} className="nav-link">Favoritos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
