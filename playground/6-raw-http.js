const http =require('http')
const url = 'http://api.weatherstack.com/current?access_key=7f1d94e947b80b5f8657a47f07f8c59d&query=20,78'
const request = http.request(url,(response,)=>{
let data=''
    response.on('data',(chunk)=>{
        data =data+chunk.toString()
       
    })

    response.on('end',()=>{
        const newdata= JSON.parse(data)
        console.log(newdata)
    })

})

request.end()