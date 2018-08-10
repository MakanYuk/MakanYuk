const axios = require('axios')

const zomato_base_url = 'https://developers.zomato.com/api/v2.1'

const Restaurant = () => {
    findById: restaurant_id => {
        return new Promise((resolve, reject) => {
            axios.get(`${zomato_base_url}/restaurant?res_id=${restaurant_id}`, {
                headers: {
                    "user-key": process.env.ZOMATO_KEY
                }
            })
            .then(response => resolve(response.data))
            .catch(err => reject(err))
        })
        
    }
}

module.exports = Restaurant

