export const LOGIN_USER = "LOGIN_USER";
export const SET_USER = "SET_USER";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_ERROR_USER = "REGISTER_ERROR_USER";
export const AUTH_ERROR_USER = "AUTH_ERROR_USER";
export const AUTO_AUTH_USER = "AUTO_AUTH_USER";
export const SUCCESS_REGISTER_USER = "SUCCESS_REGISTER_USER";
export const SET_LOADING_AUTO_AUTH_USER = "SET_LOADING_AUTO_AUTH_USER";
export const RESTORE_PASSWORD_USER = "RESTORE_PASSWORD_USER";
export const RESTORE_PASSWORD_REQUEST_USER = "RESTORE_PASSWORD_REQUEST_USER";

export type UserState = {
  isAuth: boolean;
  current: User;
  owner: Owner;
  authError: string;
  registerError: string;
  successRegister: string;
  loadingAutoAuth: boolean;
  restorePassword: string;
};

export type User = {
  id: number;
  login: string;
  firstName: string;
  lastName: string;
  email: string;
  dateRegistration: number;
  dateLastTime: number;
  ownerId: number;
  accessToken: string;
};
export type Owner = {
  id: number;
  userId: number;
};

// LoginUser action
export type LoginUserPayload = {
  login: string;
  password: string;
  errorIncorrect: string;
};
export type LoginUserAction = {
  type: typeof LOGIN_USER;
  payload: LoginUserPayload;
};

// SetUser action
export type SetUserPayload = {
  current: User;
  owner: Owner;
};
export type SetUserAction = {
  type: typeof SET_USER;
  payload: SetUserPayload;
};

// AuthError action
export type AuthErrorUserPayload = {
  authError: string;
};
export type AuthErrorUserAction = {
  type: typeof AUTH_ERROR_USER;
  payload: AuthErrorUserPayload;
};

// RegisterUser action
export type RegisterUserPayload = {
  firstName: string;
  lastName: string;
  email: string;
  existEmail: string;
  successRegister: string;
};
export type RegisterUserAction = {
  type: typeof REGISTER_USER;
  payload: RegisterUserPayload;
};

// RegisterError action
export type RegisterErrorUserPayload = {
  registerError: string;
};
export type RegisterErrorUserAction = {
  type: typeof REGISTER_ERROR_USER;
  payload: RegisterErrorUserPayload;
};

// AutoAuth action
export type AutoAuthUserAction = {
  type: typeof AUTO_AUTH_USER;
};

// SuccessRegister action
export type SuccessRegisterUserPayload = {
  successRegister: string;
};
export type SuccessRegisterUserAction = {
  type: typeof SUCCESS_REGISTER_USER;
  payload: SuccessRegisterUserPayload;
};

// SetLoadingAutoAuth action
export type SetLoadingAutoAuthUserPayload = {
  loadingAutoAuth: boolean;
};
export type SetLoadingAutoAuthUserAction = {
  type: typeof SET_LOADING_AUTO_AUTH_USER;
  payload: SetLoadingAutoAuthUserPayload;
};

// RestorePassword action
export type RestorePasswordUserPayload = {
  restorePassword: string;
};
export type RestorePasswordUserAction = {
  type: typeof RESTORE_PASSWORD_USER;
  payload: RestorePasswordUserPayload;
};

// RestorePasswordRequest action
export type RestorePasswordRequestUserPayload = {
  email: string;
  restorePasswordSuccess: string;
};
export type RestorePasswordRequestUserAction = {
  type: typeof RESTORE_PASSWORD_REQUEST_USER;
  payload: RestorePasswordRequestUserPayload;
};

export type UserActions =
  | LoginUserAction
  | SetUserAction
  | AuthErrorUserAction
  | RegisterUserAction
  | RegisterErrorUserAction
  | SuccessRegisterUserAction
  | SetLoadingAutoAuthUserAction
  | RestorePasswordUserAction;
