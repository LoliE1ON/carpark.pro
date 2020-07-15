import React from "react";
import { DisplayColumn } from "./DisplayColumns";
import { SetTablePayload } from "../../../store/Table/types";

export const Settings = ({ table }: { table: SetTablePayload }) => {
  return (
    <div className="dropdown">
      <a className="btn btn-primary dropdown-toggle" tabIndex={0}>
        <i className="fas fa-cog" />
      </a>
      <ul className="menu text-left" style={{ minWidth: 230 }}>
        {table ? <DisplayColumn type={table.type} hideColumns={table.hideColumns} columns={table.columns} /> : ""}
      </ul>
    </div>
  );
};
