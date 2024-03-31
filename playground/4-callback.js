// setTimeout(()=>{
// console.log("two seconds are up")

// },2000)

// const name =['sagar','muley','surbhi']
// const shortname = name.filter((name) => {
// return name.length>=6
// })

// // const aa=
// console.log(shortname)


// const  geocode = (adress,callback) => {

// setTimeout(()=>{
//     const data ={
//         lat:0,
//         long:0
        
//         }

//         console.log(adress)
        
//         callback(data)
// },1000)

// }

// geocode("wardha",(data)=>{
// console.log(data)
// })
const add=(a,b,callback)=>{
    setTimeout(()=>{
const sum=a+b
callback(sum)
    },2000)
}

add(10,20,(sum)=>{
    console.log(sum)
})