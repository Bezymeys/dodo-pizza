import axios from "axios";
import { baseUrl } from "../constants/api";


export const Api = axios.create({
    baseURL: baseUrl
})