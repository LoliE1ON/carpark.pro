import { takeLatest } from "redux-saga/effects";
import { loginUserWorker } from "./sagas/loginUserWorker";
import { AUTO_AUTH_USER, LOGIN_USER, REGISTER_USER, RESTORE_PASSWORD_REQUEST_USER } from "./User/types";
import { registerUserWorker } from "./sagas/registerUserWorker";
import { autoAuthUserWorker } from "./sagas/autoAuthUserWorker";
import { restorePasswordRequestWorker } from "./sagas/restorePasswordRequestWorker";

export function* sagaWatcher() {
  yield takeLatest(LOGIN_USER, loginUserWorker);
  yield takeLatest(REGISTER_USER, registerUserWorker);
  yield takeLatest(AUTO_AUTH_USER, autoAuthUserWorker);
  yield takeLatest(RESTORE_PASSWORD_REQUEST_USER, restorePasswordRequestWorker);
}
