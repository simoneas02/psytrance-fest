import axios, { type AxiosRequestConfig } from "axios";

const axiosHttpClient = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      "Content-type": "application/json",
    },
  });

  const axiosCall = async (config: AxiosRequestConfig) => {
    try {
      const { data } = await axiosInstance.request(config);
      return [null, data];
    } catch (error) {
      return [error];
    }
  };

  return { axiosCall };
};

export default axiosHttpClient;
