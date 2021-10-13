const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=58b0bf325be7e93bf824272a5859c96c&query=' + latitude + ',' + longitude + '&units=m'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ", It is Currently " + body.current.temperature + " degrees out and it feels like " + body.current.feelslike + " Chances of rain " + body.current.precip)
        }
    })
}

module.exports = forecast