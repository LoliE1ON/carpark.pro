import React from "react";

import "./styles/header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { Language } from "../language/Language";
import { Logout } from "./logout/Logout";
import { useLanguage } from "../../hooks/useLanguage/useLanguage";

export const Header = () => {
  const displayHeader = useSelector((state: RootState) => state.config.displayHeader);
  const user = useSelector((state: RootState) => state.user);
  const lang = useLanguage();

  const HeaderBlock = () => (
    <header className="navbar-container navbar">
      <section className="navbar-section">
        <Link to="/" className="navbar-brand mr-2 text-bold">
          <i className="fab fa-firefox pr-2 text-primary" />
          {lang("home")}
        </Link>

        <Link to={`/records/${new Date().toLocaleDateString("ru-RU")}`} className="btn btn-link">
          Records
        </Link>

        {user.isAuth ? (
          <Link to="/control/marshruts" className="btn btn-link header-link mr-2">
            {lang("marshruts")}
          </Link>
        ) : null}
      </section>
      <section className="navbar-center">
        <Language />
      </section>

      <section className="navbar-section">
        {user.isAuth ? (
          <>
            <Link to="/user" className="btn btn-link header-link mr-2">
              <i className="fas fa-user-circle" /> {user.current.firstName} {user.current.lastName}
            </Link>
            <Logout />
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-link header-link mr-2">
              {lang("auth")}
            </Link>
            <Link to="/register" className="btn btn-link header-link mr-2">
              {lang("register")}
            </Link>
          </>
        )}
      </section>
    </header>
  );

  return displayHeader ? <HeaderBlock /> : <></>;
};
