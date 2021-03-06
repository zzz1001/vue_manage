import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '.././components/Login.vue'
import Home from '.././components/Home.vue'
import Welcome from '.././components/Welcome.vue'
import Users from '.././views/Users.vue'
import Rights from '.././views/Rights.vue'
import Roles from '.././views/Roles.vue'
import Cate from '.././views/goods/Cate.vue'
import Params from '.././views/goods/Param.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/users', component: Users },
      { path: '/rights', component: Rights },
      { path: '/roles', component: Roles },
      { path: '/categories', component: Cate },
      { path: '/params', component: Params }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // to将要访问的路径，from代表从哪个路径跳转而来，next是一个函数表示放行
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
