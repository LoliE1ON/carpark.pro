import { Table, TableActions } from "./types";
import {
  REMOVE_TABLE_ROW,
  SAVE_TABLE_ITEM,
  SET_EDIT_ROW,
  SET_TABLE_COLUMN_MULTI_SELECT_ITEMS,
  SET_TABLE_DATA,
  SET_TABLE_SORT_COLUMN,
  TOGGLE_HIDE_COLUMN,
  TOGGLE_SELECT_ROW,
  UPDATE_TABLE_COLUMN_FILTERS,
  UPDATE_TABLE_FILTERED_DATA,
} from "./actions";

const initialState: Table = [];

export const tableReducer = (state = initialState, action: TableActions) => {
  switch (action.type) {
    case SET_TABLE_DATA: {
      return [action.payload];
    }
    case TOGGLE_HIDE_COLUMN: {
      const newState = [
        ...state.map(item =>
          item.type === action.payload.type
            ? {
                ...item,
                hideColumns: item.hideColumns.filter(col => col === action.payload.columnName).length
                  ? item.hideColumns.filter(col => col !== action.payload.columnName)
                  : [...item.hideColumns, action.payload.columnName],
              }
            : item,
        ),
      ];
      localStorage.setItem(
        `table_${action.payload.type}`,
        JSON.stringify(newState.filter(table => table.type === action.payload.type)?.[0]?.hideColumns),
      );
      return newState;
    }
    case TOGGLE_SELECT_ROW: {
      return [
        ...state.map(item =>
          item.type === action.payload.type
            ? {
                ...item,
                selectRows: item.selectRows.includes(action.payload.id)
                  ? item.selectRows.filter(row => row !== action.payload.id)
                  : [...item.selectRows, action.payload.id],
              }
            : item,
        ),
      ];
    }
    case SAVE_TABLE_ITEM: {
      return [
        ...state.map(item =>
          item.type === action.payload.type
            ? {
                ...item,
                data: item.data.map(item => (item.id === action.payload.id ? { ...action.payload.row } : { ...item })),
              }
            : item,
        ),
      ];
    }
    case REMOVE_TABLE_ROW: {
      return [
        ...state.map(item =>
          item.type === action.payload.type
            ? {
                ...item,
                data: item.data.filter(item => item.id !== action.payload.id),
              }
            : item,
        ),
      ];
    }
    case SET_EDIT_ROW: {
      return [
        ...state.map(item =>
          item.type === action.payload.type
            ? {
                ...item,
                editRow: item.editRow === action.payload.editRow ? null : action.payload.editRow,
              }
            : item,
        ),
      ];
    }
    case UPDATE_TABLE_COLUMN_FILTERS: {
      return [
        ...state.map(item =>
          item.type === action.payload.type
            ? {
                ...item,
                columns: action.payload.filters,
              }
            : item,
        ),
      ];
    }
    case UPDATE_TABLE_FILTERED_DATA: {
      return [
        ...state.map(item =>
          item.type === action.payload.type
            ? {
                ...item,
                filteredData: action.payload.filteredData,
              }
            : item,
        ),
      ];
    }
    case SET_TABLE_COLUMN_MULTI_SELECT_ITEMS: {
      return [
        ...state.map(item =>
          item.type === action.payload.type
            ? {
                ...item,
                columns: item.columns.map(column =>
                  column.name === action.payload.column
                    ? {
                        ...column,
                        filters: {
                          ...column.filters,
                          multiSelect: {
                            ...column.filters.multiSelect,
                            items: action.payload.items,
                          },
                        },
                      }
                    : column,
                ),
              }
            : item,
        ),
      ];
    }
    case SET_TABLE_SORT_COLUMN: {
      return [
        ...state.map(item =>
          item.type === action.payload.type
            ? {
                ...item,
                sortColumn: action.payload.sortColumn,
              }
            : item,
        ),
      ];
    }
  }
  return state;
};
