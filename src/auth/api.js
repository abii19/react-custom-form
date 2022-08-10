import axios from "axios";
import TokenService from "../services/token.service";
const base_url = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: base_url,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Content-Type": "application/json",
    "accept": "application/json",
  },
});

//Request Interceptors
api.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

//Response Interceptors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response.status === 401 &&
      error.response.data.message === "Token has expired"
    ) {
      TokenService.removeToken();
    } else {
      return Promise.reject(error);
    }
  },
);

export default api;
