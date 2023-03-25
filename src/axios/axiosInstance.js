import axios from "axios";

var value = localStorage.getItem("lang");

// const axiosInstance = axios.create({
//     // baseURL: 'https://606a9661e1c2a10017545b4c.mockapi.io/api/data/'
//     // "headers": {
//     //     "Access-Controll-Allow-Origin":'',
//     //     "accept": "application/json"
//     // },
//     baseURL: 'https://www.asha-holdings.com/api/',
// });
let axiosInstance;
if (value === "en") {
  axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
      Authorization: process.env.REACT_APP_API_KEY,
    },
  });
} else if (value === "ja") {
  axiosInstance = axios.create({
    baseURL: "http://localhost:8000/ja/api/",
    headers: {
      Authorization: process.env.REACT_APP_API_KEY,
    },
  });
} else {
  axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
      Authorization: process.env.REACT_APP_API_KEY,
    },
  });
}

// const axiosInstance = axios.create();
// axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
// axiosInstance.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axiosInstance.defaults.xsrfCookieName = "csrftoken";
// axiosInstance.defaults.withCredentials = true;
export default axiosInstance;
