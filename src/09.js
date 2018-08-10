const Koa = require('koa')
const app = new Koa()
// 中间件栈
// 注意观察输出
const one = (ctx, next) => {
  console.log('>>one')
  next()
  console.log('<<none')
}
const two = (ctx, next) => {
  console.log('>>two')
  next()
  console.log('<<two')
}
const three = (ctx, next) => {
  console.log('>>three')
  next()
  console.log('<<three')
}
app.use(one)
app.use(two)
app.use(three)
app.listen(3000)