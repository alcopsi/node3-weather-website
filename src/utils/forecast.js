const request = require('postman-request');



const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=7ddbb99b08bac73f3e1d2d40557fb940&query=${latitude},${longitude}`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        }
        else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees. The humidity is ${body.current.humidity}%.`);
        }
    })
}

module.exports = forecast;