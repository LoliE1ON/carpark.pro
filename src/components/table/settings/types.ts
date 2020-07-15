import { TableItemColumn } from "../../../store/Table/types";

export type DisplayColumnProps = {
  columns: TableItemColumn[];
  hideColumns: string[];
  type: string;
};
