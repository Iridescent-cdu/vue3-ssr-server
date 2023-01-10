const express = require('express')
const server = express()

import createApp from '../app'
import { renderToString } from '@vue/server-renderer'
import createRouter from '../router'
import { createMemoryHistory } from 'vue-router'
import { createPinia } from 'pinia'

//部署静态资源
server.use(express.static('build'))

//后端路由改为/*，以保证前端路由的刷新访问
server.get('/*', async (req, res) => {
  //创建SSR Vue实例
  const app = createApp()

  //创建服务端的router
  const router = createRouter(createMemoryHistory())
  app.use(router)
  //路由跳转并且等待路由加载完成，再渲染页面
  await router.push(req.url || '/')
  await router.isReady()

  //安装服务端的pinia插件
  const pinia = createPinia()
  app.use(pinia)

  //转为HTML字符串
  const appStringHtml = await renderToString(app)

  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta
        http-equiv="X-UA-Compatible"
        content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div id="app">
      ${appStringHtml}
      </div>
      <script src="/client/client_bundle.js"></script>
    </body>
  </html>
  `)
})

server.listen(3000, () => {
  console.log('start node server on 3000')
})
