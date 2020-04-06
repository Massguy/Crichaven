import {
  GET_PRODUCTS_BY_ARRIVAL,
  GET_PRODUCTS_BY_SELL,
  GET_BRANDS,
} from ".././actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case GET_PRODUCTS_BY_SELL:
      return {
        ...state,
        bySell: action.payLoad,
      };
    case GET_PRODUCTS_BY_ARRIVAL:
      return { ...state, byArrival: action.payLoad };
    case GET_BRANDS:
      return { ...state, brands: action.payLoad };
    default:
      return state;
  }
}
