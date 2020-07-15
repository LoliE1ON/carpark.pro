import React from "react";
import { BreadcrumbsProps } from "./types";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import "./styles.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage/useLanguage";

export const Breadcrumbs = ({ children }: BreadcrumbsProps) => {
  const currentLanguage = useSelector((state: RootState) => state.config.lang);
  const lang = useLanguage();

  return (
    <div className="card mb-2">
      <div className="card-body card-body-small">
        <div className="columns columns-center">
          <div className="column col-auto">
            <div className={`dropdown ${currentLanguage === "il" ? "dropdown-right" : "dropdown-left"}`}>
              <a className="btn btn-primary dropdown-toggle" tabIndex={0}>
                <i className="fas fa-bars" />
              </a>
              <ul className="menu text-left">
                <li className="menu-item">
                  <Link to="/">
                    <i className="fas fa-home" /> {lang("home")}
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/user">
                    <i className="fas fa-user-circle" /> {lang("userPage")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="column">{children}</div>
        </div>
      </div>
    </div>
  );
};
