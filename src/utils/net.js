import axios from "axios";

export const mock = axios.create({
  baseURL: "http://localhost:8089",
  timeout: 2000,
});
