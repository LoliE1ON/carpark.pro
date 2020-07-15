import { api } from "./utils";

export type LoginUserParams = {
  login: string;
  password: string;
};

export type RegisterUserParams = {
  firstName: string;
  lastName: string;
  email: string;
};

export type AutoAuthUserParams = {
  accessToken: string;
};

export type RestorePasswordParams = {
  email: string;
};

export const loginUserRequest = async (params: LoginUserParams) => await api.post("auth/login", params);
export const registerUserRequest = async (params: RegisterUserParams) => await api.post("auth/register", params);
export const autoAuthUserRequest = async (params: AutoAuthUserParams) => await api.post("auth/token", params);
export const restorePasswordRequest = async (params: RestorePasswordParams) => await api.post("auth/password", params);
