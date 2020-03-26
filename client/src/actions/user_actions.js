import axios from "axios";
import { LOGIN_USER } from "./types";

import { USER_SERVER } from "../utils/index";

export async function loginUser(loginData) {
  const request = await axios.post(`${USER_SERVER}/login`, loginData);

  return {
    type: LOGIN_USER,
    payLoad: request.data
  };
}
