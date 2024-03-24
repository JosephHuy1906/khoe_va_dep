import axios from "axios";

const instance = axios.create({
  baseURL: "https://khoevadep54.name.vn/api",
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      //   window.location.replace("/pages/login");
    }

    if (error.response && error.response.status === 500) {
      // window.location.replace('/500')
    }
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

export default instance;
