const Koa = require('koa')
const app = new Koa()

// Koa 提供一个 Context 对象，
//表示一次对话的上下文（包括 HTTP 请求和 HTTP 响应）
const main = ctx => {
  ctx.response.body = 'Hello World'
}

app.use(main)
app.listen(3000)