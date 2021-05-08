import Axios from "axios";

const axiosInstance = Axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosInstance;

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

axiosInstance.interceptors.request.use(async (request) => {
  request.baseURL = process.env.serverAddress;
  request.headers["x-apikey"] = [process.env.apiKey];
  request.headers["Access-Control-Allow-Origin"] = ["*"];

  return request;
});

const errorHandler = (error: any) => {
  console.log(
    "%c ERROR (interceptor) responce =>",
    "background: #8B0000; color: #ffffff; font-size:11pt; font-weight: bold;",
    error.response
  );

  return Promise.reject({ ...error });
};

const successHandler = (response: any) => {
  console.log(
    "%c SUCCESS (interceptor) responce =>",
    "background: #006400; color: #ffffff; font-size:11pt; font-weight: bold;",
    response
  );

  return response;
};

// const isHandlerEnabled = (config) => {
//   if (config.data === "unhandler") return false;
//   return true;
// };
