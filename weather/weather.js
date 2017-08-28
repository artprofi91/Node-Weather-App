const request = require('request');


var getWeather = (lat, lng, callback) => {

request({
    url: `https://api.darksky.net/forecast/5fe899bf440c0b57304df24c93f3ebe1/${lat},${lng}`,
    json: true
    }, (error, response, body) => {
        if(error) {
            callback('Unable to connect to Forecast.io server.');
        } else if(!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather.');
        }
});
};

module.exports.getWeather = getWeather;