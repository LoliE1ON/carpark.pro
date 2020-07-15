import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { generateRecords } from "../../store/Record/actions";
import { parse, format, addDays } from "date-fns";
import { AddRecord } from "./AddRecord";
import { RootState } from "../../store/reducers";
import { useHistory } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Language } from "../language/Language";
import { useLanguage } from "../../hooks/useLanguage/useLanguage";

export const Header = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  let { date } = useParams();
  const lang = useLanguage();

  const isLoadingGenerateRecords = useSelector((state: RootState) => state.record.isLoadingGenerateRecords);
  const isLoadingSwitchDate = useSelector((state: RootState) => state.record.isLoadingSwitchDate);

  const onGenerateRows = () => {
    dispatch(generateRecords(date));
  };

  return (
    <header className="navbar-container navbar">
      <section className="navbar-section">
        <Link to="/" className="navbar-brand mr-2 text-bold">
          <i className="fab fa-firefox pr-2 text-primary" />
          Home
        </Link>
      </section>
      <section
        className="navbar-section text-center"
        style={{
          flexDirection: "column",
        }}>
        <div style={{ display: "flex" }}>
          <Link
            to={`/records/${format(addDays(parse(date, "dd.MM.yyyy", new Date()), -1), "dd.MM.yyyy")}`}
            className="btn">
            {lang("prev")}
          </Link>

          <DatePicker
            selected={parse(date, "dd.MM.yyyy", new Date())}
            onChange={inputDate => history.push(`/records/${format(inputDate || new Date(), "dd.MM.yyyy")}`)}
            dateFormat="dd.MM.yyyy"
          />

          <Link
            to={`/records/${format(addDays(parse(date, "dd.MM.yyyy", new Date()), 1), "dd.MM.yyyy")}`}
            className="btn mr-2">
            {lang("next")}
          </Link>

          <div style={{ width: 30, paddingTop: 5 }}>
            {isLoadingSwitchDate ? <i className="fas fa-circle-notch fa-spin mr-2 text-primary" /> : " "}
          </div>
        </div>
      </section>
      <section className="navbar-section">
        <Language />

        {isLoadingGenerateRecords && <i className="fas fa-circle-notch fa-spin mr-2 text-primary" />}
        <button className="btn mr-2" onClick={onGenerateRows}>
          {lang("generateRows")}
        </button>

        <AddRecord />
      </section>
    </header>
  );
};
