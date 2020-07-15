import { call, put, select } from "redux-saga/effects";
import { LoginUserAction } from "../User/types";
import { loginUserRequest } from "../../api/auth";
import { authErrorUser, setUser } from "../User/actions";
import { RootState } from "../reducers";

export function* loginUserWorker(action: LoginUserAction) {
  try {
    const state: RootState = yield select();
    const {
      data: { data },
    } = yield call(loginUserRequest, action.payload);

    if (data?.error?.auth) yield put(authErrorUser({ authError: action.payload.errorIncorrect }));
    else {
      const account = JSON.parse(data);
      localStorage.accessToken = account.user.accessToken;
      yield put(
        setUser({
          current: account.user,
          owner: account.owner,
        }),
      );
    }
  } catch (e) {
    yield put(authErrorUser({ authError: "Auth error" }));
  }
}
