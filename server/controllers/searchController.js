const axios = require('axios')

const { responseObj } = require('../helpers/response')

const zomato_base_url = 'https://developers.zomato.com/api/v2.1/'

const searchRestaurant = (req, res, next) => {
    const location_id = req.query.location
    const location_type = 'subzone'

    const zomato_search_url = `${zomato_base_url}/search?entity_id=${location_id}&entity_type=${location_type}`

    if (!location_id)
        res.status(400).json(responseObj('invalid location'))
    else {
        axios.get(zomato_search_url, {
            headers: {
                "user-key": process.env.ZOMATO_KEY
            }
        })
            .then(response => res.status(200).json(
                responseObj('success',
                    response.data.map(
                        resto => {
                            id = resto.id,
                                name = resto.name,
                                address = resto.location.address
                        }))))
            .catch(err => res.status(500).json(err))
    }
}

const searchLocation = (req, res, next) => {

    const query = req.query.q
    const zomato_location_url = `${zomato_base_url}/locations?query=${query}`

    axios.get(zomato_location_url, {
        headers: {
            "user-key": process.env.ZOMATO_KEY
        }
    })
        .then(response => res.status(200).json(responseObj('success', response.data)))
        .catch(err => res.status(400).json(err))
}

module.exports = { searchRestaurant, searchLocation }