const request = require('request')
weatherREQ =(lat,long,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=7f1d94e947b80b5f8657a47f07f8c59d&query='+lat+','+long
    request({ url, json: true }, (error, {body}) => {
   callback(undefined,{
       op : body.current.weather_descriptions+" It is currently "+body.current.temperature+" degrees out .There is a "+body.current.precip+"% cahnce of rain ."
   })
   })
   }
   module.exports=weatherREQ