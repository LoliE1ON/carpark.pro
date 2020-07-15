import {
  AUTH_ERROR_USER,
  AuthErrorUserAction,
  AuthErrorUserPayload,
  AUTO_AUTH_USER,
  AutoAuthUserAction,
  LOGIN_USER,
  LoginUserAction,
  LoginUserPayload,
  REGISTER_ERROR_USER,
  REGISTER_USER,
  RegisterErrorUserAction,
  RegisterErrorUserPayload,
  RegisterUserAction,
  RegisterUserPayload,
  RESTORE_PASSWORD_REQUEST_USER,
  RESTORE_PASSWORD_USER,
  RestorePasswordRequestUserAction,
  RestorePasswordRequestUserPayload,
  RestorePasswordUserAction,
  RestorePasswordUserPayload,
  SET_LOADING_AUTO_AUTH_USER,
  SET_USER,
  SetLoadingAutoAuthUserAction,
  SetLoadingAutoAuthUserPayload,
  SetUserAction,
  SetUserPayload,
  SUCCESS_REGISTER_USER,
  SuccessRegisterUserAction,
  SuccessRegisterUserPayload,
} from "./types";

export const loginUser = (payload: LoginUserPayload): LoginUserAction => {
  return {
    type: LOGIN_USER,
    payload,
  };
};

export const registerUser = (payload: RegisterUserPayload): RegisterUserAction => {
  return {
    type: REGISTER_USER,
    payload,
  };
};

export const setUser = (payload: SetUserPayload): SetUserAction => {
  return {
    type: SET_USER,
    payload,
  };
};

export const authErrorUser = (payload: AuthErrorUserPayload): AuthErrorUserAction => {
  return {
    type: AUTH_ERROR_USER,
    payload,
  };
};

export const registerErrorUser = (payload: RegisterErrorUserPayload): RegisterErrorUserAction => {
  return {
    type: REGISTER_ERROR_USER,
    payload,
  };
};

export const autoAuthUser = (): AutoAuthUserAction => {
  return {
    type: AUTO_AUTH_USER,
  };
};

export const successRegisterUser = (payload: SuccessRegisterUserPayload): SuccessRegisterUserAction => {
  return {
    type: SUCCESS_REGISTER_USER,
    payload,
  };
};

export const setLoadingAutoAuthUser = (payload: SetLoadingAutoAuthUserPayload): SetLoadingAutoAuthUserAction => {
  return {
    type: SET_LOADING_AUTO_AUTH_USER,
    payload,
  };
};

export const restorePasswordUser = (payload: RestorePasswordUserPayload): RestorePasswordUserAction => {
  return {
    type: RESTORE_PASSWORD_USER,
    payload,
  };
};

export const restorePasswordRequestUser = (
  payload: RestorePasswordRequestUserPayload,
): RestorePasswordRequestUserAction => {
  return {
    type: RESTORE_PASSWORD_REQUEST_USER,
    payload,
  };
};
