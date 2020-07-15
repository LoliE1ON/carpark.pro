import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import { restorePasswordRequestUser } from "../../../store/User/actions";
import { useLanguage } from "../../../hooks/useLanguage/useLanguage";

export const PasswordPage = () => {
  const dispatch = useDispatch();
  const restorePasswordMessage = useSelector((state: RootState) => state.user.restorePassword);
  const lang = useLanguage();

  const [state, setState] = useState("");

  const onSubmit = () => {
    dispatch(
      restorePasswordRequestUser({
        email: state,
        restorePasswordSuccess: lang("restorePasswordSuccess"),
      }),
    );
  };

  const RestorePasswordMessage = () => (
    <div className="text-success">
      <i className="fas fa-exclamation-triangle" /> {restorePasswordMessage}
    </div>
  );

  return (
    <>
      <div className="text-center">
        <h4>{lang("restorePassword")}</h4>
      </div>
      <div className="register">
        <div className="register__container">
          <div className="card">
            <div className="card-body">
              {restorePasswordMessage.length ? <RestorePasswordMessage /> : ""}

              <div className="form-group">
                <label className="form-label" htmlFor="login">
                  <i className="fas fa-envelope" /> {lang("email")}
                </label>
                <input
                  type="text"
                  className="form-input"
                  id="login"
                  name="login"
                  onChange={e => setState(e.currentTarget.value)}
                  placeholder={lang("email")}
                />
              </div>
              <button className="btn btn-primary" onClick={onSubmit}>
                {lang("restore")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
