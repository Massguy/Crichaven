import axios from "axios";

import {
  GET_PRODUCTS_BY_SELL,
  GET_PRODUCTS_BY_ARRIVAL,
  GET_BRANDS,
  GET_PRODUCTS_TO_SHOP,
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
