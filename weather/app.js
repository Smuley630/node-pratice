const request = require('request')
const geocode =require('./utils/geocode')
const weatherREQ = require('./utils/weatherreport')


const adress=process.argv[2]

geocode(adress, (error, {lat,long}) => {

    if (error) {
        return console.log(error)
    } else {

        console.log(lat,long)
        weatherREQ(lat, long, (error, {op}) => {

            if (error) {
                return console.log(error)
            } else {
                console.log(op)
            }
        })
    }


})



