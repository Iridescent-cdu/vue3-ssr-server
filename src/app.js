import { createSSRApp } from 'vue'

import App from './App.vue'

//这里写一个函数来返回app实例，避免跨请求状态的污染
export default function createApp() {
  const app = createSSRApp(App)

  return app
}
