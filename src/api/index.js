// axios二次封装
import axios from "axios";
import Vue from "vue";

import { Notify } from "vant";
Vue.use(Notify);
// 基础路径-超时时间
const request = axios.create({
  baseURL: process.env.VUE_APP_API_ENV,
  timeout: 5000,
});

// 请求响应拦截器
request.interceptors.request.use((config) => {
  // 统一在这里调用请求头
  return config;
});
request.interceptors.response.use(
  (response) => {
    //成功回调
    //简化数据
    return response.data;
  },
  (error) => {
    //失败回调:处理http网络错误的
    //定义一个变量:存储网络错误信息
    let messageInfo = "";
    //http状态码
    const status = error.response?.status;
    switch (status) {
      case 401:
        messageInfo = "TOKEN过期";
        break;
      case 403:
        messageInfo = "无权访问";
        break;
      case 404:
        messageInfo = "请求地址错误";
        break;
      case 500:
        messageInfo = "服务器出错";
        break;
      case 504:
        messageInfo = "服务器未处理";
        break;
      default:
        messageInfo = "网络出现问题";
        break;
    }
    //提示错误信息
    Notify({
      message: messageInfo,
      color: "#fafafa",
      background: "#1989fa",
      duration: 1000,
    });

    return Promise.reject(new Error(messageInfo));
  }
);
export default request;
