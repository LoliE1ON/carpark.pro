import React, { useState } from "react";
import { WrapEditRecordProps } from "../table/types";
import { saveRecordRequest, removeRecordRequest } from "../../api/records";
import { Modal } from "../../presentations/Modal/Modal";
import { useLanguage } from "../../hooks/useLanguage/useLanguage";

export const EditRecord = ({ row, saveRow, removeRow }: WrapEditRecordProps) => {
  const lang = useLanguage();
  const [state, setState] = useState({ ...row });

  const onChangeInputField = (field: string, value: any) => setState((state: any) => ({ ...state, [field]: value }));

  const onSaveRow = () => {
    saveRecordRequest({
      id: state.id,
      row: state,
    }).then(data => saveRow(state.id, state));
  };

  const onRemoveRow = () => {
    removeRecordRequest({
      id: state.id,
    }).then(data => removeRow(state.id));
  };

  return (
    <div className="table-edit-row">
      <div className="container">
        <div className="columns">
          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">{lang("name")}</label>
              <input
                className="form-input input-sm"
                type="text"
                onChange={e => onChangeInputField("name", e.target.value)}
                defaultValue={state.name}
                placeholder={lang("name")}
              />
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">{lang("lastName")}</label>
              <input
                className="form-input input-sm"
                type="text"
                onChange={e => onChangeInputField("lastName", e.target.value)}
                defaultValue={state.lastName}
                placeholder={lang("lastName")}
              />
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">{lang("mobile")}</label>
              <input
                className="form-input input-sm"
                type="text"
                onChange={e => onChangeInputField("mobile", e.target.value)}
                defaultValue={state.mobile}
                placeholder={lang("mobile")}
              />
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">{lang("totalPeople")}</label>
              <input
                className="form-input input-sm"
                type="number"
                onChange={e => onChangeInputField("totalPeople", +e.target.value)}
                defaultValue={state.totalPeople}
                placeholder={lang("totalPeople")}
              />
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">{lang("arrivalTime")}</label>
              <input
                className="form-input input-sm"
                type="text"
                onChange={e => onChangeInputField("arrivalTime", e.target.value)}
                defaultValue={state.arrivalDate}
                placeholder={lang("arrivalDate")}
              />
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">{lang("departureTime")}</label>
              <input
                className="form-input input-sm"
                type="text"
                onChange={e => onChangeInputField("departureTime", e.target.value)}
                defaultValue={state.departureDate}
                placeholder={lang("departureTime")}
              />
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">{lang("sum")}</label>
              <input
                className="form-input input-sm"
                onChange={e => onChangeInputField("money", e.target.value)}
                defaultValue={state.money}
                type="text"
                placeholder={lang("sum")}
              />
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">{lang("paymentState")}</label>
              <select
                onChange={e => onChangeInputField("paymentState", +e.target.value)}
                className="form-select select-sm">
                <option selected={state.paymentState === 0} value={0}>
                  {lang("paymentStateNotPay")}
                </option>
                <option selected={state.paymentState === 1} value={1}>
                  {lang("paymentStatePay")}
                </option>
              </select>
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">{lang("additionally")}</label>
              <input
                className="form-input input-sm"
                onChange={e => onChangeInputField("additionally", e.currentTarget.value)}
                defaultValue={state.additionally}
                type="text"
                placeholder={lang("additionally")}
              />
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">{lang("numberMidday")}</label>
              <input
                className="form-input input-sm"
                type="number"
                onChange={e => onChangeInputField("numberMidday", +e.currentTarget.value)}
                defaultValue={state.numberMidday}
                placeholder={lang("numberMidday")}
              />
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">{lang("numberDinners")}</label>
              <input
                className="form-input input-sm"
                type="number"
                onChange={e => onChangeInputField("numberDinners", +e.currentTarget.value)}
                defaultValue={state.numberDinners}
                placeholder={lang("numberDinners")}
              />
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">{lang("numberBreakfasts")}</label>
              <input
                className="form-input input-sm"
                type="number"
                onChange={e => onChangeInputField("numberBreakfasts", +e.currentTarget.value)}
                defaultValue={state.numberBreakfasts}
                placeholder={lang("numberBreakfasts")}
              />
            </div>
          </div>

          <div className="column col-3">
            <button className="btn btn-primary mt-2" onClick={onSaveRow}>
              {lang("save")}
            </button>
            <Modal
              title={lang("removing")}
              description={lang("removingRowQuestion")}
              buttonText={lang("remove")}
              buttonClasses={"btn-error mt-2 ml-2"}
              callback={onRemoveRow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
