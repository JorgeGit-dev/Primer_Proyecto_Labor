// src/ components/ header/ Header.jsx

import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import { Nav } from "../nav/Nav";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <div className="logo-container">
          <img src={logo} />
          <span>Reactiva</span>
        </div>
      </Link>
      <Nav />
    </header>
  );
};