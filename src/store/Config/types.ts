import { CHANGE_LANG, SET_DISPLAY_HEADER } from "./actions";

export type Lang = "ru" | "en" | "il";

export type ConfigState = {
  displayHeader: boolean;
  lang: Lang;
};

export type SetDisplayHeaderPayload = boolean;
export type SetDisplayHeaderAction = {
  type: typeof SET_DISPLAY_HEADER;
  payload: SetDisplayHeaderPayload;
};

export type ChangeLangPayload = Lang;
export type ChangeLangAction = {
  type: typeof CHANGE_LANG;
  payload: ChangeLangPayload;
};

export type ConfigActions = SetDisplayHeaderAction | ChangeLangAction;
