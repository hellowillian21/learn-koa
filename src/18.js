const Koa = require('koa')
const app = new Koa()

const handler = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500
    ctx.response.type = 'html'
    ctx.response.body = '<p>Something wrong, please contact administrator</p>'
    ctx.app.emit('error', err, ctx)
  }
}
const main = ctx => {
  ctx.throw(500)
}
app.use(handler)
app.use(main)
app.on('error', function (err) {
  console.log('loggong error', err.message)
  console.log(err)
})
app.listen(3000)