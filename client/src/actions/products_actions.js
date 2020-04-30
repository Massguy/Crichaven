import axios from "axios";

import {
  GET_PRODUCTS_BY_SELL,
  GET_PRODUCTS_BY_ARRIVAL,
  GET_BRANDS,
  GET_PRODUCTS_TO_SHOP,
  ADD_PRODUCT,
  CLEAR_PRODUCT,
  GET_SINGLE_PRODUCT,
  CLEAR_SINGLE_PRODUCT,
} from "./types";

import { PRODUCT_SERVER } from "../utils/index";

export async function getProductsBySell() {
  const request = await axios.get(
    `${PRODUCT_SERVER}/cricketbat?sortBy=sold&order=desc&limit=4`
  );
  return {
    type: GET_PRODUCTS_BY_SELL,
    payLoad: request.data,
  };
}
export async function getSingleProduct(id) {
  const request = await axios.get(
    `${PRODUCT_SERVER}/bat_by_id?id=${id}&type=single`
  );
  return {
    type: GET_SINGLE_PRODUCT,
    payLoad: request.data[0],
  };
}

export async function clearSingleProduct() {
  return {
    type: CLEAR_SINGLE_PRODUCT,
    payLoad: "",
  };
}
export async function getProductsByArrival() {
  const request = await axios.get(
    `${PRODUCT_SERVER}/cricketbat?sortBy=createdAt&order=desc&limit=4`
  );

  return {
    type: GET_PRODUCTS_BY_ARRIVAL,
    payLoad: request.data,
  };
}

export async function getBrands() {
  const request = await axios.get(`${PRODUCT_SERVER}/brands`);

  return {
    type: GET_BRANDS,
    payLoad: request.data,
  };
}

export async function getProductsToShop(
  skip,
  limit,
  filters = [],
  previousState = []
) {
  const data = {
    limit,
    skip,
    filters,
  };
  const request = await axios
    .post(`${PRODUCT_SERVER}shop`, data)
    .then((response) => {
      let newState = [...previousState, ...response.data.cricketbats];
      return {
        size: response.data.size,
        cricketbats: newState,
      };
    });
  return {
    type: GET_PRODUCTS_TO_SHOP,
    payLoad: request,
  };
}

export async function addProduct(registerData) {
  const request = await axios.post(`${PRODUCT_SERVER}cricketbat`, registerData);
  console.log(request.data);
  return {
    type: ADD_PRODUCT,
    payLoad: request.data,
  };
}

export async function clearProduct() {
  return {
    type: CLEAR_PRODUCT,
    payLoad: "",
  };
}
