import axios from 'axios';

import qs from 'qs';

import { createSign } from 'api/sign';

import { removeToken } from './utils';

const URL_DEVELOPMENT = 'http://api-control.test.hxsapp.com/';
// const URL_DEVELOPMENT = 'http://192.168.1.59/';
// http://192.168.1.59/admin/Plan/planBodyList
const URL_PRODUCTION = 'http://api-control.hxsapp.com/';

const HOST_DEVELOPMENT = 'admin-gym.test.hxsapp.com';

const HOST_PRODUCTION = 'admin-gym.hxsapp.com';

const HOST = window.location.host;

const axiosClient = axios.create({
  // baseURL: process.env.NODE_ENV === 'development' ? '/api' : 'http://api-control.test.hxsapp.com/',
  baseURL: HOST === HOST_PRODUCTION ? URL_PRODUCTION : process.env.NODE_ENV === 'development' ? '/api' : URL_DEVELOPMENT,
  withCredentials: true,
  timeout: 10000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [
    function(data, headers) {
      return qs.stringify(createSign(data));
    }
  ]
});

// 拦截请求, 登录接口不传token
axiosClient.interceptors.request.use(function (config) {
  // headers = {'Content-Type': "application/x-www-form-urlencoded"}
  if (config.url === 'admin/User/loginValid') {
    config.headers.common = {'Content-Type': 'application/x-www-form-urlencoded'};
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 拦截返回值
axiosClient.interceptors.response.use( (response) => {
  if (response.data.code == 400 && response.data.data.tokenStatus == 0) {
    removeToken();
    window.location.reload();
    return;
  }
  return response;
})

export { axiosClient };
