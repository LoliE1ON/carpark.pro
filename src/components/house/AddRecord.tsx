import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addNewRecord } from "../../store/Record/actions";
import { RootState } from "../../store/reducers";
import { Select } from "../../presentations/Select/Select";
import { SelectList } from "../../presentations/Select/types";
import { useLanguage } from "../../hooks/useLanguage/useLanguage";

export const AddRecord = () => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const lang = useLanguage();
  let { date } = useParams();

  const isLoadingAddRecord = useSelector((state: RootState) => state.record.isLoadingAddRecord);

  const onAddRecord = () => {
    if (state.length) {
      dispatch(addNewRecord(date, state));
    }
  };

  const rooms: SelectList[] = [
    {
      name: "בית הת" + " The Tea House",
      value: "בית התה" + " The Tea House",
    },
    {
      name: "בית המורה",
      value: "בית המורה",
    },
    {
      name: "בית הסופר" + " Author House",
      value: "בית הסופר" + " Author House",
    },
    {
      name: "בית שחרות",
      value: "בית שחרות",
    },
    {
      name: "בית הנווד",
      value: "בית הנווד",
    },
    {
      name: "בית מרפא",
      value: "בית מרפא",
    },
    {
      name: "בית אברהם",
      value: "בית אברהם",
    },
    {
      name: "בית השחר" + " The Dawn House",
      value: "בית השחר" + " The Dawn House",
    },
  ];

  return (
    <div>
      <a className="btn btn-primary" href="#example-modal-2">
        {isLoadingAddRecord ? <i className="fas fa-circle-notch fa-spin" /> : <i className="fas fa-pen" />}
      </a>
      <div className="modal modal-sm" id="example-modal-2">
        <a className="modal-overlay" href="#modals-sizes" aria-label="Close" />
        <div className="modal-container" role="document">
          <div className="modal-header">
            <a className="btn btn-clear float-right" href="#modals-sizes" aria-label="Close" />
            <div className="modal-title h5">{lang("newRecord")}</div>
          </div>
          <div className="modal-body" style={{ overflowY: "unset" }}>
            <div className="content">
              <div className="form-group">
                <Select placeholder={lang("selectRoom")} onSelect={(value: string) => setState(value)} list={rooms} />
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <a className="btn btn-primary" href="#modals-sizes" onClick={onAddRecord}>
              {lang("add")}
            </a>
            <a className="btn btn-link" href="#modals-sizes" aria-label="Close">
              {lang("cancel")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
