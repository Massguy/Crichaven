import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER
} from ".././actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        register: action.payLoad
      };

    case LOGIN_USER:
      return {
        ...state,
        loginSucces: action.payLoad
      };

    case AUTH_USER:
      return {
        ...state,
        userData: action.payLoad
      };
    case LOGOUT_USER:
      return {
        ...state
      };

    default:
      return state;
  }
}
