const yargs = require('yargs');
const colors = require('colors');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            descride: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
 if (errorMessage) {
     console.log('Error message'.red);
 } else {
     console.log(results.address);
     weather.getWeather(results.latitude, results.longtitude, (errorMessage, weatherResults) => {
        if(errorMessage) {
            console.log(errorMessage);
        } else {
            console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`)
        }
    });
 }
});




