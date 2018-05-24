/**
 * axios 拦截器
 * */
import AXIOS from 'axios'
import { Toast } from 'mand-mobile'

/**
 * 添加请求拦截器
 * */
AXIOS.interceptors.request.use(function (config) {
  // 发送请求前
  return config;
}, function (error) {
  Toast.loading('请求报错！');
  // 请求报错
  return Promise.reject(error);
})

/**
 * 添加响应拦截器
 * */
AXIOS.interceptors.response.use(function (response) {
  // 响应数据做些什么
  return response;
}, function (error) {
  Toast.loading('请求报错！');
  // 对响应错误做点什么
  return Promise.reject(error);
})

