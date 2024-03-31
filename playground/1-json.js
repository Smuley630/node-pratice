const fs =require('fs')
// const book = {
//     title: "ego is enamy",
//     auther: "sagar muley"
// }
// const bookjson=JSON.stringify(book)
// // console.log(bookjson)
// const parsdata=JSON.parse(bookjson)
// // console.log(parsdata.title)
// fs.writeFileSync('1-json.json',bookjson)
// const databuffer= fs.readFileSync('1-json.json')
// const dataJson =databuffer.toString()
// const dataParse=JSON.parse(dataJson)
// console.log(dataParse)


const databuffer = fs.readFileSync('1-json.json')
const data= databuffer.toString()
// console.log(data)
const jsonobj= JSON.parse(data)
console.log(jsonobj.language)
jsonobj.language="marathi"
console.log("..new",jsonobj)
const newjsonobj=JSON.stringify(jsonobj)
fs.writeFileSync('1-json.json',newjsonobj)