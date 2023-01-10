import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import createRouter from '../router'
import App from '../App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)
const router = createRouter(createWebHistory())
const pinia = createPinia()

app.use(router)
app.use(pinia)

//客户端同样需要等待再挂载页面
router.isReady().then(() => {
  app.mount('#app')
})
