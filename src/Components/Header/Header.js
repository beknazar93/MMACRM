import React, { useState } from "react";
import Photo from "../Header/img/mlogo.png";
import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";

function Header() {
  const [isOpen, setOpen] = useState();
  return (
    <section className="header">
      <div className="container">
        <div className="header__nav">
          <img className="header__nav-logo" src={Photo} />
          <nav className={`header__nav-menu ${isOpen ? "active" : ""}`}>
            <ul className="header__nav-list">
              <li>
                <Link to="/" className="header__nav-list-subtitle">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/Виды спорта" className="header__nav-list-subtitle">
                  Виды спорта
                </Link>
              </li>
              <li>
                <Link to="/Новости" className="header__nav-list-subtitle">
                  Наш зал
                </Link>
              </li>
            </ul>
          </nav>
          <button
            className="header__nav-button"
            onClick={() => setOpen(!isOpen)}
          >
            <CiMenuKebab />
          </button>
        </div>
      </div>
    </section>
  );
}
export default Header;
