import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_CART_USER,
  GET_CART_ITEMS_USER,
  REMOVE_CART_ITEM_USER,
  UPDATE_DATA_USER,
  CLEAR_UPDATE_USER_DATA,
} from ".././actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        register: action.payLoad,
      };

    case LOGIN_USER:
      return {
        ...state,
        loginSucces: action.payLoad,
      };

    case AUTH_USER:
      return {
        ...state,
        userData: action.payLoad,
      };
    case LOGOUT_USER:
      return {
        ...state,
      };
    case ADD_TO_CART_USER:
      return {
        ...state,
        userData: {
          ...state.userData,
          cart: action.payLoad,
        },
      };
    case GET_CART_ITEMS_USER:
      return { ...state, cartDetail: action.payLoad };
    case REMOVE_CART_ITEM_USER:
      return {
        ...state,
        cartDetail: action.payLoad.cartDetail,
        userData: {
          ...state.userData,
          cart: action.payLoad.cart,
        },
      };
    case UPDATE_DATA_USER:
      return { ...state, updateUser: action.payLoad };
    case CLEAR_UPDATE_USER_DATA:
      return { ...state, updateUser: action.payLoad };
    default:
      return state;
  }
}
