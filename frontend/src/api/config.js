import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api/admin",
});

export const methodApi = async (method, url, data) => {
  let response;
  try {
    if (method === "post") {
      response = await api.post(url, data);
    } else if (method === "get") {
      response = await api.get(url, data);
    } else if (method === "delete") {
      response = await api.delete(url, data);
    } else if (method === "put") {
      response = await api.put(url, data);
    }
    return response;
  } catch (err) {
    console.log(err);
    return err.response;
  }
};
api.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "adminInfo"
    )}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
