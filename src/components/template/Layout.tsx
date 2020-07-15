import React, { useEffect } from "react";

import "./styles/layout.css";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";

export const Layout = ({ children }: { children: any }) => {
  const lang = useSelector((state: RootState) => state.config.lang);

  // Apply RTL
  useEffect(() => {
    if (lang === "il") document.querySelector("body")?.classList.add("rtl");
  }, [lang]);

  return (
    <div className="content">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
