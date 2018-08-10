const jwt = require('jsonwebtoken')
const { responseObj } = require('./response')

const auth = () => {
    return (req, res, next) => {
        jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err){
                res.status(401).json(responseObj('not authenticated'))
            }
            else {
                req.user = decoded
                next()
            }
        })
    }
}

module.exports = {
    auth
}