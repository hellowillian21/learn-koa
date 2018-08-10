const Koa = require('koa')
const app = new Koa()
/*每个中间件默认接受两个参数，
第一个参数是 Context 对象，
第二个参数是next函数。
只要调用next函数，就可以把执行权转交给下一个中间件*/
const logger = (ctx, next) => {
  console.log(`${Date.now()}${ctx.request.method}${ctx.request.url}`)
  next()
}
//logger函数就是一个中间件，用app.use()加载中间件
app.use(logger) 
app.listen(3000)