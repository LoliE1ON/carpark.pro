import { call, put, select } from "redux-saga/effects";
import { RegisterUserAction } from "../User/types";
import { registerUserRequest } from "../../api/auth";
import { registerErrorUser, successRegisterUser } from "../User/actions";
import { RootState } from "../reducers";

export function* registerUserWorker(action: RegisterUserAction) {
  try {
    const state: RootState = yield select();
    const {
      data: { data },
    } = yield call(registerUserRequest, action.payload);

    if (data?.error?.existEmail) yield put(registerErrorUser({ registerError: action.payload.existEmail }));
    else {
      yield put(
        successRegisterUser({
          successRegister: action.payload.successRegister,
        }),
      );
    }
  } catch (e) {
    console.log(e);
    yield put(registerErrorUser({ registerError: "Register error!" }));
  }
}
