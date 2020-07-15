import { call, put } from "redux-saga/effects";
import { RestorePasswordRequestUserAction } from "../User/types";
import { restorePasswordRequest } from "../../api/auth";
import { restorePasswordUser } from "../User/actions";

export function* restorePasswordRequestWorker(action: RestorePasswordRequestUserAction) {
  try {
    yield call(restorePasswordRequest, action.payload);
    yield put(
      restorePasswordUser({
        restorePassword: action.payload.restorePasswordSuccess,
      }),
    );
  } catch (e) {
    console.log(e);
  }
}
