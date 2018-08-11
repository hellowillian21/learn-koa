const Koa = require('koa')
const koaBody = require('koa-body')
const fs = require('fs')
const route = require('koa-route')

const app = new Koa()

const main = (ctx, next) => {
  // const body = ctx.request.body
  // if (!body.name) ctx.throw(400, '.name required')
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream('./template.html')
   
  // ctx.response.body = 
  next()
}

const userinfo = (ctx, next) => {
  console.log(ctx.request.body.name)
  ctx.response.body = ctx.request.body.name
  next()
}
app.use(route.get('/', main))
app.use(route.get('/userinfo', userinfo))
app.use(koaBody())
app.listen(3000)