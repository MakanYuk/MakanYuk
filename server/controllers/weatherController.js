const axios = require('axios')

class WeatherController {
  static getForecast(req, res){
    const city = 'jakarta'
    axios.get(`http://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${process.env.WEATHER_KEY}`)
    .then(forecast=>{
      // console.log('---- berhasil', forecast.data)
      var data = []
      forecast.data.data.forEach(day=>{
        data.push({date: day.valid_date, icon: day.weather.icon, code: day.weather.code, weather: day.weather.description})
      })
      // console.log(data);
      res.status(200).json({message: 'forecast successfully retrived', data: data})
    })
    .catch(err=>{
      // console.log("---",err)
      res.status(400).json({message: `something went wrong!`, err})
    })
  }
}

module.exports = WeatherController
