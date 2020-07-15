import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { registerUser } from "../../store/User/actions";
import { useFormik } from "formik";
import { ErrorFields, RegisterFields } from "./types";
import { useHistory } from "react-router-dom";
import "./styles.css";
import { QuestionPassword } from "../../components/template/auth/QuestionPassword";
import { useLanguage } from "../../hooks/useLanguage/useLanguage";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const lang = useLanguage();

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    user.isAuth && history.push("/user");
  }, [user.isAuth, history]);

  const validate = (values: RegisterFields) => {
    const errors: ErrorFields = {};

    if (!values.firstName) errors.firstName = lang("requiredField");
    if (!values.lastName) errors.lastName = lang("requiredField");

    if (!values.email) errors.email = lang("requiredField");
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = lang("invalidEmail");

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: values => {
      dispatch(registerUser({ ...values, existEmail: lang("existEmail"), successRegister: lang("successRegister") }));
    },
  });

  const RegisterError = () => (
    <div className="text-error">
      <i className="fas fa-exclamation-triangle" /> {user.registerError}
    </div>
  );

  const SuccessRegister = () => (
    <div className="card mb-2">
      <div className="card-body">
        <div className="text-success">
          <i className="far fa-check-circle" /> {user.successRegister}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="text-center">
        <h4>{lang("register")}</h4>
      </div>

      <div className="register">
        <div className="register__container">
          {user.successRegister.length ? <SuccessRegister /> : ""}

          <div className="card">
            <div className="card-body">
              {user.registerError.length ? <RegisterError /> : ""}

              <form onSubmit={formik.handleSubmit}>
                <div className={`form-group ${formik.errors.firstName ? `has-error` : ``}`}>
                  <label className="form-label" htmlFor="firstName">
                    <i className="fas fa-id-card" /> {lang("firstName")}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="form-input"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    placeholder={lang("firstName")}
                  />
                  {formik.errors.firstName ? <p className="form-input-hint">{formik.errors.firstName}</p> : null}
                </div>

                <div className={`form-group ${formik.errors.lastName ? `has-error` : ``}`}>
                  <label className="form-label" htmlFor="lastName">
                    <i className="fas fa-id-card" /> {lang("lastName")}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="form-input"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    placeholder={lang("lastName")}
                  />
                  {formik.errors.lastName ? <p className="form-input-hint">{formik.errors.lastName}</p> : null}
                </div>

                <div className={`form-group ${formik.errors.email ? `has-error` : ``}`}>
                  <label className="form-label" htmlFor="email">
                    <i className="fas fa-envelope" /> {lang("email")}
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-input"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder={lang("email")}
                  />
                  {formik.errors.email ? <p className="form-input-hint">{formik.errors.email}</p> : null}
                </div>

                <button className="btn btn-primary" type="submit">
                  {lang("signupButton")}
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
