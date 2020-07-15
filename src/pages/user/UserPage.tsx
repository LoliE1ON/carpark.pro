import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { Breadcrumbs } from "../../presentations/breadcrumbs/Breadcrumbs";
import { useLanguage } from "../../hooks/useLanguage/useLanguage";

export const UserPage = () => {
  const history = useHistory();
  const lang = useLanguage();

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    !user.isAuth && history.push("/login");
  }, [user.isAuth, history]);

  return (
    <div className="container">
      <Breadcrumbs>{lang("userPage")}</Breadcrumbs>
      <div className="card">
        <div className="card-body">
          {user.current.firstName} {user.current.lastName}
        </div>
      </div>
    </div>
  );
};
