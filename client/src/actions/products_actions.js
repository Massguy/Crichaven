import axios from "axios";

import {
  GET_PRODUCTS_BY_SELL,
  GET_PRODUCTS_BY_ARRIVAL,
  GET_BRANDS,
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
