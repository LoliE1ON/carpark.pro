import { AutoAuthUserAction } from "../User/types";
import { call, put } from "redux-saga/effects";
import { autoAuthUserRequest } from "../../api/auth";
import { setLoadingAutoAuthUser, setUser } from "../User/actions";

export function* autoAuthUserWorker(action: AutoAuthUserAction) {
  if (localStorage.accessToken === undefined) return;
  if (!localStorage.accessToken.length) return;

  try {
    const {
      data: { data },
    } = yield call(autoAuthUserRequest, {
      accessToken: localStorage.accessToken,
    });

    const account = JSON.parse(data);
    localStorage.accessToken = account.user.accessToken;
    yield put(
      setUser({
        current: account.user,
        owner: account.owner,
      }),
    );
  } catch (e) {
    yield put(
      setLoadingAutoAuthUser({
        loadingAutoAuth: false,
      }),
    );
    localStorage.accessToken = "";
    console.log(e);
  }

  yield put(
    setLoadingAutoAuthUser({
      loadingAutoAuth: false,
    }),
  );
}
