const axios = require('axios')

const { responseObj } = require('../helpers/response')

const zomato_base_url = 'https://developers.zomato.com/api/v2.1/'

const searchRestaurant = (req, res, next) => {
    const lat = req.query.lat * 1
    const lon = req.query.lon * 1
    const radius = 1000
    console.log('lat', lat)
    console.log('lon', lon)
    const zomato_search_url = `${zomato_base_url}/search?lat=${lat}&lon=${lon}&radius=${radius}`

    if (!lat || !lon)
        res.status(400).json(responseObj('invalid location'))
    else {
        axios.get(zomato_search_url, {
            headers: {
                "user-key": process.env.ZOMATO_KEY
            }
        })
            .then(response => res.status(200).json(responseObj('success', response.data)))
            .catch(err => res.status(500).json(err))
    }
}

module.exports = { searchRestaurant }