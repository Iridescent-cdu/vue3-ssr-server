import { createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/home.vue'),
  },
  {
    path: '/about',
    component: () => import('../views/about.vue'),
  },
]

/**
 * //函数形式创建router实例，避免跨请求状态污染
 * @param {*} history 路由模式：服务端和客户端路由模式不同
 * @returns
 */
export default function (history) {
  return createRouter({
    history,
    routes,
  })
}
