import {
  LOGIN_LOADING,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

const initState = {
  loading: false,
  error: false,
  token: "",
  data,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case LOGIN_SUCCESS: {
      // console.log('herestate',payload)
      return {
        ...state,
        loading: false,
        error: false,
        token: payload,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
      };
    }
    case "setdata": {
      return {
        ...state,
        data: payload,
      };
    }
    default: {
      return state;
    }
  }
};
