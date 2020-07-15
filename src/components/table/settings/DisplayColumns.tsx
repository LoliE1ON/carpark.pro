import React from "react";
import { DisplayColumnProps } from "./types";
import { useDispatch } from "react-redux";
import { toggleHideColumn } from "../../../store/Table/actions";

export const DisplayColumn = ({ type, columns, hideColumns }: DisplayColumnProps) => {
  console.log("HIDE COLS", hideColumns);

  const dispatch = useDispatch();

  const onToggleHideColumn = (columnName: string) => {
    dispatch(
      toggleHideColumn({
        type,
        columnName,
      }),
    );
  };

  return (
    <>
      <li className="divider" data-content="Скрытие столбцов" />
      {columns.map(column => (
        <li className="menu-item" key={column.title}>
          <a href="#">
            <div className="form-group">
              <label className="form-checkbox">
                <input
                  type="checkbox"
                  defaultChecked={Boolean(hideColumns.filter(hideColumn => hideColumn === column.name).length)}
                  onChange={() => onToggleHideColumn(column.name)}
                />
                <i className="form-icon" /> {column.title}
              </label>
            </div>
          </a>
        </li>
      ))}
    </>
  );
};
