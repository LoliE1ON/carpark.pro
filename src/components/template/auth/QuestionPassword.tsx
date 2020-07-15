import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../hooks/useLanguage/useLanguage";

export const QuestionPassword = () => {
  const lang = useLanguage();

  return (
    <ul className="nav">
      <li className="nav-item text-center">
        <Link to="/login/password">
          <i className="fas fa-question-circle" /> {lang("questionPassword")}
        </Link>
      </li>
    </ul>
  );
};
