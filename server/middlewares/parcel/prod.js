const views = require('koa-views')
const serve = require('koa-static')

const { resolve } = require('path')

const r = path => resolve(__dirname, path)

const bundler = new Bundler(r('../../../src/index.html'), {
    publicUrl: '/',
    watch: true
})

export const dev = async app => {
    app.use(serve(r('../../../dist')))
    app.use(view(r('../../../dist')), {
        extension: 'html'
    })
    
    app.use(async (ctx) => {
        await ctx.render('index.html')
    })
}