import React, { useEffect } from "react";

import { Index } from "./pages/index/Index";
import { Switch, Route } from "react-router-dom";
import { Records } from "./pages/records/Records";
import { LoginPage } from "./pages/login/LoginPage";
import { RegisterPage } from "./pages/register/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { autoAuthUser } from "./store/User/actions";
import { UserPage } from "./pages/user/UserPage";
import { MarshrutsPage } from "./pages/control/marshruts/MarshrutsPage";
import { RootState } from "./store/reducers";
import { PasswordPage } from "./pages/login/password/PasswordPage";

export const Routes = () => {
  const dispatch = useDispatch();
  const loadingAutoAuth = useSelector((state: RootState) => state.user.loadingAutoAuth);

  // Auth user
  useEffect(() => {
    dispatch(autoAuthUser());
  }, [dispatch]);

  const Routes = () => {
    return (
      <Switch>
        <Route path="/control/marshruts">
          <MarshrutsPage />
        </Route>
        <Route path="/login/password">
          <PasswordPage />
        </Route>
        <Route path="/records/:date">
          <Records />
        </Route>
        <Route path="/user">
          <UserPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    );
  };

  return !loadingAutoAuth ? <Routes /> : <div>Wait...</div>;
};
