import axios from 'axios';
import baseUrl from './baseUrl';
import { Toast } from 'vant';

axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
Vue.prototype.$static = '';

axios.defaults.baseURL = baseUrl;

axios.interceptors.response.use(
  response => {
    let data;
    if (response.data == undefined) {
      data = JSON.parse(response.request.responseText);
    } else {
      data = response.data;
    }
    return data;
  },
  err => {
    if(err && err.response) {
      console.log(err);
    };
    return Promise.reject(err);
  }
);

axios.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

export function fetchGet(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      })
  })
};

export function fetchPost(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      })
  })
}
