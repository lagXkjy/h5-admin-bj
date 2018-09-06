// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from 'store';
// import moment from 'moment';
import { permission } from './direct';

import App from './App'
 
import { axiosClient } from 'common/axiosClient';

import { getToken } from 'common/utils';

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import 'assets/style/index.scss' // global css

import './permission'

// Vue.prototype.$loading = Loading.service
// Vue.prototype.$msgbox = MessageBox
// Vue.prototype.$alert = MessageBox.alert
// Vue.prototype.$confirm = MessageBox.confirm
// Vue.prototype.$prompt = MessageBox.prompt
// Vue.prototype.$notify = Notification
// Vue.prototype.$message = Message   // 1

Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
})

Vue.config.productionTip = false

Vue.prototype.moment = moment;

axiosClient.defaults.headers.common['token'] = getToken();
// axiosClient.defaults.headers.common['token'] = '111'
axiosClient.defaults.headers.common['userId'] = store.state.auth.userInformation.id;
// 检测登录状态. 
// router.beforeEach((to, from, next) => {
//   const { state } = store;
//   const { isLogin } = state.auth;
//   if (!to.matched || !to.matched.length) {
//     next({ path: '/', replace: true });
//     return;
//   }
//   if (to.name !== 'login') {
//     if (!isLogin) {
//       const token = localStorage.getItem('accessToken');
//       let res = localStorage.getItem('userInformation');
//       store.commit('setLogin', JSON.parse(res));
//       if (!token) {
//         if (from.name !== 'login' && to.name) {
//           next({ path: '/login', replace: true, query: { to: to.path } });
//         } else {
//           next({ path: '/login', replace: true });
//         }
//         return;
//       }
//     }
//   }
//   next();
// });
/* eslint-disable no-new */
window.vue = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
