import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { Lang } from "../../store/Config/types";
import { changeLang } from "../../store/Config/actions";

export const Language = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state: RootState) => state.config.lang);

  const onChangeLang = (lang: Lang) => {
    dispatch(changeLang(lang));
    if (lang === "il") document.querySelector("body")?.classList.add("rtl");
    else document.querySelector("body")?.classList.remove("rtl");
  };

  const flagIcon = lang === "ru" ? "ru.jpg" : lang === "il" ? "il.png" : "en.png";

  return (
    <div className="dropdown">
      <a className="btn dropdown-toggle mr-2" tabIndex={0}>
        <img src={`/${flagIcon}`} width={20} />
      </a>
      <ul className="menu">
        <li className="menu-item">
          <a className="c-hand" onClick={() => onChangeLang("ru")}>
            <img src="/ru.jpg" width={20} className="mr-2" />
            Русский
          </a>
        </li>
        <li className="menu-item">
          <a className="c-hand" onClick={() => onChangeLang("il")}>
            <img src="/il.png" width={20} className="mr-2" />
            עִבְרִית
          </a>
        </li>
        <li className="menu-item">
          <a className="c-hand" onClick={() => onChangeLang("en")}>
            <img src="/en.png" width={20} className="mr-2" />
            English
          </a>
        </li>
      </ul>
    </div>
  );
};
