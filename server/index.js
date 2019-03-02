const Koa = require('Koa')
const views = require('koa-views')
const { resolve } = require('path')
const { connect, initSchemas } = require('./database/init')
const router = require('./routes')

;(async () => {
    await connect()
    initSchemas()

    // require('./tasks/movie')
    // require('./tasks/api')
})()

const app = new Koa()

app.use(router.routes())
    .use(router.allowedMethods)
 
app.use(views(resolve(__dirname, './views'), {
    extension: 'pug'
}))

app.use(async (ctx, next) => {
    await ctx.render('index', {
        you: 'Luke',
        me: 'HW'
    })
})
app.listen('4455')

