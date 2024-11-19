import { Link, useNavigate } from "react-router-dom";
import styled from "./NavBar.module.css";
import { useIsLogin } from "../store/useLogin";


export default function NavBar() {

  const {isLogin} = useIsLogin();
  const handleIsLogin = useIsLogin((state) => state.setIsLogin);
  const navigate = useNavigate();

  const logoutButton = () => {

    handleIsLogin(false);
    localStorage.removeItem("token");
    navigate("/");
  }



  return (
    <div>
      <nav
        className={
          styled.navegacion + ` navbar navbar-expand-lg bg-body-tertiary`
        }
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">AppNav</Link>
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
                  <Link  to={"/countries"} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
               <Link  to={"/favoritos"} className="nav-link">Favoritos</Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="btn btn-danger" onClick={logoutButton}>Salir</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
