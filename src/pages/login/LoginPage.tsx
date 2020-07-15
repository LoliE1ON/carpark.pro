import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { loginUser } from "../../store/User/actions";
import { useHistory } from "react-router-dom";
import { QuestionPassword } from "../../components/template/auth/QuestionPassword";
import { useLanguage } from "../../hooks/useLanguage/useLanguage";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const lang = useLanguage();

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    user.isAuth && history.push("/user");
  }, [user.isAuth, history]);

  const [state, setState] = useState({
    login: "",
    password: "",
  });

  const onChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState({ login: e.currentTarget.value, password: state.password });
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState({ login: state.login, password: e.currentTarget.value });

  const onLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(loginUser({ ...state, errorIncorrect: lang("loginOrPasswordIncorrect") }));
  };
  const AuthError = () => (
    <div className="text-error">
      <i className="fas fa-exclamation-triangle" /> {user.authError}
    </div>
  );

  return (
    <>
      <div className="text-center">
        <h4>{lang("auth")}</h4>
      </div>
      <div className="register">
        <div className="register__container">
          <div className="card">
            <div className="card-body">
              {user.authError.length ? <AuthError /> : ""}
              <form name="login">
                <div className="form-group">
                  <label className="form-label" htmlFor="login">
                    <i className="fas fa-envelope" /> {lang("email")}
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    id="login"
                    name="login"
                    onChange={onChangeLogin}
                    placeholder={lang("email")}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="password">
                    <i className="fas fa-key" /> {lang("password")}
                  </label>
                  <input
                    type="password"
                    className="form-input"
                    id="password"
                    name="password"
                    onChange={onChangePassword}
                    placeholder={lang("password")}
                  />
                </div>

                <button className="btn btn-primary" onClick={onLogin}>
                  {lang("signinButton")}
                </button>
              </form>
            </div>
          </div>

          <QuestionPassword />
        </div>
      </div>
    </>
  );
};
