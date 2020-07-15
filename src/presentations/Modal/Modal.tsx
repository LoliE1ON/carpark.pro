import React, { useState } from "react";
import { ModalProps } from "./types";
import "./styles.css";
import { useLanguage } from "../../hooks/useLanguage/useLanguage";

export const Modal = ({ title, description, buttonText, buttonClasses, callback }: ModalProps) => {
  const [visible, setVisible] = useState(false);
  const lang = useLanguage();

  const onClickButton = () => callback();
  const Button = () => (
    <button onClick={() => setVisible(true)} className={`btn ${buttonClasses}`}>
      {buttonText}
    </button>
  );
  return (
    <>
      <Button />
      <div className={`modal ${visible ? `active` : ``}`}>
        <a className="modal-overlay" aria-label="Close" onClick={() => setVisible(false)} />
        <div className="modal-container">
          <div className="modal-header">
            <a className="btn btn-clear float-right" onClick={() => setVisible(false)} aria-label="Close" />
            <div className="modal-title h5">{title}</div>
          </div>
          <div className="modal-body">
            <div className="content">{description}</div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={onClickButton}>
              {buttonText}
            </button>
            <a className="btn btn-link" aria-label="Close" onClick={() => setVisible(false)}>
              {lang("close")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
