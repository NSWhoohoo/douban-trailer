const rp = require('request-promise-native')

async function fetchMovie(item) {
    const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`

    const res = await rp(url)

    return res
}

;(async () => {
    let movies = [
        { doubanId: 26733371,
        title: '地球脉动 第二季',
        rate: 9.9,
        poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2410512421.jpg' },
      { doubanId: 26592971,
        title: '瑞克和莫蒂 第三季',
        rate: 9.8,
        poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2453814101.jpg' }
      ]

    movies.map(async movie => {
        let movieData = await fetchMovie(movie)
        try {
            movieData = JSON.parse(movieData)
            console.log(movieData.summary)
        } catch (err) {
            console.log(err)
        }
    })
})()
