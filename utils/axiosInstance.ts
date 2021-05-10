import Axios from "axios";
import notification from "../components/notifiction";

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

  if (response.data) {
    let color;
    if (response.data.status === 200) {
      color = "success";
    } else if (response.data.status < 400) {
      color = "warning";
    } else {
      color = "error";
    }

    if (response.data && response.data.message) {
      notification(response.data.message, color);
    } else if (response.data.statusCode === 500) {
      notification(
        `خطا در سرور => ${response.config.method} => ${response.config.url} `,
        "error"
      );
    } else if (response.data.statusCode === 401) {
      notification("خطای عدم دسترسی", "error");
      console.log(
        "%c خطای دسترسی",
        "background: yellow; color: #000; font-size:11pt; font-weight: bold;"
      );
    }
    if (response.data.code) {
      notification("خطا در سرور", "error");
    }
  }

  return response;
};

// const isHandlerEnabled = (config) => {
//   if (config.data === "unhandler") return false;
//   return true;
// };
