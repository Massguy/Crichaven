import { LOGIN_USER, REGISTER_USER } from ".././actions/types";

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

    default:
      return state;
  }
}
