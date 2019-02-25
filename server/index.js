const Koa = require('Koa')
const App = new Koa()
const { normal } = require('./tpl')
App.use(async (ctx, next) => {
    ctx.type = 'text/html; charset=utf-8'
    ctx.body = normal
})
App.listen('4455')

