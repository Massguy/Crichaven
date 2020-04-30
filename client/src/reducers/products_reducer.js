import {
  GET_PRODUCTS_BY_ARRIVAL,
  GET_PRODUCTS_BY_SELL,
  GET_BRANDS,
  GET_PRODUCTS_TO_SHOP,
  ADD_PRODUCT,
  CLEAR_PRODUCT,
  GET_SINGLE_PRODUCT,
  CLEAR_SINGLE_PRODUCT,
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
    case GET_PRODUCTS_TO_SHOP:
      return {
        ...state,
        toShop: action.payLoad.cricketbats,
        toShopSize: action.payLoad.size,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        addProduct: action.payLoad,
      };
    case CLEAR_PRODUCT:
      return {
        ...state,
        addProduct: action.payLoad,
      };
    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        prodDetail: action.payLoad,
      };
    case CLEAR_SINGLE_PRODUCT:
      return {
        ...state,
        prodDetail: action.payLoad,
      };
    default:
      return state;
  }
}
