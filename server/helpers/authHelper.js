const { responseObj } = require('./response')

// const isAuthenticated = () => {
//     return (req, res, next) => {
//         jwt.verify(req.headers.auth - token, process.env.JWT_SECRET_KEY, (err, decoded) => {
//             if (err)
//                 res.status(401).json(responseObj('not authenticated'))
//             else {
//                 req.user = decoded
//                 next()
//             }
//         })
//     }
// }

const isAuthenticated = () => {
    return (req, res, next) => {
        req.user = { id: "123456" }
        next()
    }
}

module.exports = {
    isAuthenticated
}