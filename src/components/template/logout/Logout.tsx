import React from "react";

export const Logout = () => {
  const onLogout = () => {
    localStorage.accessToken = "";
    window.location.href = "/";
  };

  return (
    <a className="btn btn-link header-link mr-2" onClick={onLogout}>
      <i className="fas fa-power-off" />
    </a>
  );
};
