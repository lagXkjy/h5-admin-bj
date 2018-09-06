import router from './router'
import store from './store'
// import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from 'common/utils' // getToken from cookie
import { axiosClient } from 'common/axiosClient'

NProgress.configure({ showSpinner: false })// NProgress Configuration

// permission judge function

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar 
  if (getToken()) { // 获取token
    /* has token*/
    // header中添加token
    axiosClient.defaults.headers.common['token'] = getToken();
    // axiosClient.defaults.headers.common['token'] = '111'
    axiosClient.defaults.headers.common['userId'] = store.state.auth.userInformation.id;
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // 进度条
    } 
    else {
      // if (localStorage.getItem('userInformation')) { // 判断当前用户是否存在个人信息
        // store.dispatch('GetUserInfo').then(res => { // 拉取user_info
          // const roles = res.data.roles // note: roles must be a array! such as: ['editor','develop']
          if (store.state.auth.permissionList.length === 0) { // 没有个人信息(权限树)
            store.dispatch('getUserInfo').then( () => { // 拉取个人信息及权限树
              store.commit('setLogin', JSON.parse(localStorage.getItem('userInformation'))); // 设置个人信息
              store.dispatch('generateRoutes').then(() => { // 获取可访问的路由表
                // console.log('添加路由表', store.getters.addRouters)
                router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
                // next();
                next({ ...to, replace: true }) // 确保路由挂载完, 继续加载后执行else里的next()
              })
            }).catch( () => {
              store.dispatch('Fedout').then( () => {
                next({path: '/'})
              })
            })
          } 
          else { // 存在用户信息, 已添加完路由表直接next()
            next();
          }
        // })
      // } 
    }
  } else { 
    /** 
     * 没有token
     * 注: next(参数) 会把to.path改为参数中的路径, 又会重新触发这个狗子, 需要和你指定的路径做判断next(); 不加参数才会向下继续执行, 否则会死循环
     */
      if (to.path == '/login') {
        next();
      } else {
        next('/login')
      }
    // next('/login')
    // store.dispatch('Fedout').then( () => {
    //   NProgress.done();
    //   if (to.path == '/login') {
    //     next();
    //   } else {
    //     next('/login')
    //   }
    // })
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
