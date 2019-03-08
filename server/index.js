const Koa = require('Koa')
const views = require('koa-views')
const { resolve } = require('path')
const { connect, initSchemas, initAmdin } = require('./database/init')
const R = require('ramda')
const MIDDLEWARES = ['common','router', 'parcel']

const useMiddlewares = (app) => {
    R.map(
        R.compose(
            R.forEachObjIndexed (
                initWith => initWith(app)
            ), 
            require,
            name => resolve(__dirname, `./middlewares/${name}`)
        )
    )(MIDDLEWARES)
}

;(async () => {
    await connect()
    initSchemas()
    initAmdin()

    // require('./tasks/movie')
    // require('./tasks/api')
    // require('./tasks/trailer')
    // require('./tasks/qiniu')

    const app = new Koa()
    await useMiddlewares(app)
    
    app.listen('4455')
})()
