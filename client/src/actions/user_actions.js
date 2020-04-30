import axios from "axios";
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
} from "./types";

import { USER_SERVER, PRODUCT_SERVER } from "../utils/index";

export async function registerUser(registerData) {
  const request = await axios.post(`${USER_SERVER}/register`, registerData);
  console.log(request.data);

  return {
    type: REGISTER_USER,
    payLoad: request.data,
  };
}

export async function loginUser(loginData) {
  const request = await axios.post(`${USER_SERVER}/login`, loginData);

  return {
    type: LOGIN_USER,
    payLoad: request.data,
  };
}

export async function auth() {
  const request = await axios.get(`${USER_SERVER}/auth`);

  return {
    type: AUTH_USER,
    payLoad: request.data,
  };
}

export async function logoutUser() {
  const request = await axios.get(`${USER_SERVER}/logout`);

  return {
    type: LOGOUT_USER,
    payLoad: request.data,
  };
}

export async function addToCart(_id) {
  const request = await axios.post(`${USER_SERVER}/addToCart?productId=${_id}`);

  return {
    type: ADD_TO_CART_USER,
    payLoad: request.data,
  };
}
export async function getCartItems(cartItems, userCart) {
  const request = await axios
    .get(`${PRODUCT_SERVER}/bat_by_id?id=${cartItems}&type=array`)
    .then((response) => {
      userCart.forEach((item) => {
        response.data.forEach((k, i) => {
          if (item.id === k._id) {
            response.data[i].quantity = item.quantity;
          }
        });
      });
      return response.data;
    });
  console.log(request.data);
  return {
    type: GET_CART_ITEMS_USER,
    payLoad: request,
  };
}

export async function removeCartItem(id) {
  const request = await axios
    .get(`${USER_SERVER}/removeFromCart?_id=${id}`)
    .then((response) => {
      console.log(response.data);
      response.data.cart.forEach((item) => {
        response.data.cartDetail.forEach((k, i) => {
          if (item.id === k._id) {
            response.data.cartDetail[i].quantity = item.quantity;
          }
        });
      });
      return response.data;
    });
  return {
    type: REMOVE_CART_ITEM_USER,
    payLoad: request,
  };
}

export async function updateUserData(dataToSubmit) {
  const request = await axios
    .post(`${USER_SERVER}/update_profile`, dataToSubmit)
    .then((response) => {
      return response.data;
    });
  return {
    type: UPDATE_DATA_USER,
    payLoad: request,
  };
}

export function clearUpdateUser() {
  return {
    type: CLEAR_UPDATE_USER_DATA,
    payLoad: "",
  };
}
