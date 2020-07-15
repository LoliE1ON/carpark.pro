import { ChangeLangAction, ChangeLangPayload, SetDisplayHeaderAction, SetDisplayHeaderPayload } from "./types";

export const SET_DISPLAY_HEADER = "SET_DISPLAY_HEADER";
export const CHANGE_LANG = "CHANGE_LANG";

export function setDisplayHeader(payload: SetDisplayHeaderPayload): SetDisplayHeaderAction {
  return {
    type: SET_DISPLAY_HEADER,
    payload,
  };
}

export function changeLang(payload: ChangeLangPayload): ChangeLangAction {
  return {
    type: CHANGE_LANG,
    payload,
  };
}
