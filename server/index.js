const Koa = require('Koa')
const App = new Koa()
App.use(async (ctx, next) => {
    ctx.body = '电影首页'
})
App.listen('4455')

