module.exports = {
    responseObj: (message, data) => {
        return {
            "message": message || '',
            "data": data || {}
        }
    }
}