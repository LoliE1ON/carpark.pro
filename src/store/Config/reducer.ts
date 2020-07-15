import { ConfigActions, ConfigState } from "./types";
import { CHANGE_LANG, SET_DISPLAY_HEADER } from "./actions";

const initialState: ConfigState = {
  displayHeader: true,
  lang: localStorage.lang || "ru",
};

export const configReducer = (state = initialState, action: ConfigActions) => {
  switch (action.type) {
    case SET_DISPLAY_HEADER: {
      return {
        ...state,
        displayHeader: action.payload,
      };
    }
    case CHANGE_LANG: {
      localStorage.lang = action.payload;
      return {
        ...state,
        lang: action.payload,
      };
    }
  }
  return state;
};
