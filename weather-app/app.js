const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=7f1d94e947b80b5f8657a47f07f8c59d&query=20.750,78.617'

request({ url: url, json: true }, (error, response) => {

//     if(error){
// console.log(error)
//     } else if (response.body.error){
// console.log(response.body.error.info)
//     }
    
    
//     else{
//     console.log(response.body.current.weather_descriptions+" It is currently "+response.body.current.temperature+" degrees out .There is a "+response.body.current.precip+"% cahnce of rain .")

//     }
//    try{
//     console.log(response.body.current.weather_descriptions+" It is currently "+response.body.current.temperature+" degrees out .There is a "+response.body.current.precip+"% cahnce of rain .")
//    }catch(e){
//     console.log(error)
//    }
})

const nyrl= "https://api.mapbox.com/geocoding/v5/mapbox.places/Wardha.json?access_token=pk.eyJ1Ijoic211bGV5MTIiLCJhIjoiY2x1M3hmMjFyMTB1djJxcGQ1cDlhNWVkaiJ9.ZLTbm-J-g0RO_lOiLXy1pA&limit=1"
 request({url:nyrl,json:true},(error, response)=>{

if(error){
    console.log(error)
}else if (response.body.message){
    console.log(response.body.message)
}else{

     const long= response.body.features[0].center[0]
    const lat=response.body.features[0].center[1]
console.log("longitude ="+long+" latitude is ="+lat)
}

   
 })