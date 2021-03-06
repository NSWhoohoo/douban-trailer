const mongoose = require('mongoose')
const db = 'mongodb://localhost/douban-trailer'
const glob = require('glob')
const { resolve } = require('path')
mongoose.Promise = global.Promise

exports.initSchemas = () => {
    glob.sync(resolve(__dirname, './schema', '**/*.js')).forEach(require)
}

exports.initAmdin = async () => {
    const User = mongoose.model('User')
    let user = await User.findOne({
        username: 'HW'
    })

    if (!user) {
        const user = new User({
            username: 'HW',
            email: 'HW@gmail.com',
            password: '1234'
        })

        await user.save()
    }
}

exports.connect = () => {
    let maxConnectTimes = 0

    return new Promise((resolve, reject) => {
        if (process.env.NODE_ENV !=="production") {
            mongoose.set('debug', true)
        }
    
        mongoose.connect(db)
    
        mongoose.connection.on('disconnected', () => {
            if (maxConnectTimes++ < 5) {
                mongoose.connect(db)
            } else {
                throw new Error('数据库挂啦')
            }
        })
    
        mongoose.connection.on('error', err => {
            if (maxConnectTimes++ < 5) {
                mongoose.connect(db)
            } else {
                throw new Error('数据库挂啦')
            }
        })
    
        mongoose.connection.once('open', () => {
            // const Dog = mongoose.model('Dog', { name: String })
            // const doga = new Dog({ name: 'alpha'})
            // doga.save().then(() => {
            //     console.log('wang')
            // })
            resolve()
            console.log('MongoDB Connected successfully')
        })
    })
}