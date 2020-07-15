import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.carpark.pro/",
  responseType: "json",
});

export const request = axios.create({
  responseType: "json",
});
