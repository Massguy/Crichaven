import axios from "axios";
import { LOGIN_USER, REGISTER_USER } from "./types";

import { USER_SERVER } from "../utils/index";

export async function registerUser(registerData) {
  const request = await axios.post(`${USER_SERVER}/register`, registerData);
  console.log(request.data);

  return {
    type: REGISTER_USER,
    payLoad: request.data
  };
}

export async function loginUser(loginData) {
  const request = await axios.post(`${USER_SERVER}/login`, loginData);

  return {
    type: LOGIN_USER,
    payLoad: request.data
  };
}
