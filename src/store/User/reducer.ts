import {
  AUTH_ERROR_USER,
  REGISTER_ERROR_USER,
  RESTORE_PASSWORD_USER,
  SET_LOADING_AUTO_AUTH_USER,
  SET_USER,
  SUCCESS_REGISTER_USER,
  UserActions,
  UserState,
} from "./types";

const accessToken = localStorage.accessToken || "";
const loadingAutoAuth = !!accessToken.length;

const initialState: UserState = {
  isAuth: false,
  current: {
    id: 0,
    login: "",
    firstName: "",
    lastName: "",
    email: "",
    dateRegistration: 0,
    dateLastTime: 0,
    ownerId: 0,
    accessToken: "",
  },
  owner: {
    id: 0,
    userId: 0,
  },
  authError: "",
  registerError: "",
  successRegister: "",
  loadingAutoAuth,
  restorePassword: "",
};

export const userReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        current: { ...action.payload.current },
        owner: { ...action.payload.owner },
        isAuth: true,
      };
    }
    case AUTH_ERROR_USER: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case REGISTER_ERROR_USER: {
      return {
        ...state,
        ...action.payload,
        successRegister: "",
      };
    }
    case SUCCESS_REGISTER_USER: {
      return {
        ...state,
        ...action.payload,
        registerError: "",
      };
    }
    case SET_LOADING_AUTO_AUTH_USER: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case RESTORE_PASSWORD_USER: {
      return {
        ...state,
        ...action.payload,
      };
    }
  }
  return state;
};
