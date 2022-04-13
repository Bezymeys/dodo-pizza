import axios from "axios";
import { baseUrl } from "../constants/api.js";

export const Api = axios.create({
  baseURL: baseUrl
})


