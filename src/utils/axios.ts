import axios from "axios";

/*
 * axios配置
 * */
const config: object = {
  baseURL: "",
  timeout: 1000,
  // headers: { "X-Custom-Header": "foobar" },
};

/*
 * 创建axios实例
 * */
const _axios = axios.create(config);

/*
 * 请求拦截器
 * */
_axios.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

/*
 * 响应拦截器
 * */
_axios.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default _axios