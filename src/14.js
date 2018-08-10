const Koa = require('koa')
const app = new Koa()

// 抛出500错误
const main = ctx => {
  ctx.throw(500)
}
app.use(main)
app.listen(3000)