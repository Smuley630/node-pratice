const fs =require('fs')
const data =function(a,b){
 return a+b
}
const addnote = function(title,body){
   console.log("here")
const notes=loadnotes()
notes.push({
   title:title,
   body:body
})
saveNotes(notes)
}
const removenote =(note) =>{
   console.log("here remove")
const notes=loadnotes()
// if(notes.title===note.title){
   let filteredArray = notes.filter(obj => obj.title !== note);
// }

saveNotes(filteredArray)
}

 const saveNotes= function(notes){
const datajson=JSON.stringify(notes)
console.log("til ")
fs.writeFileSync('notes.json',datajson)
 }
const loadnotes =function(){
   try {const databuffer= fs.readFileSync('notes.json')
   const datajson= databuffer.toString()
   // console.log(JSON.parse(datajson))
   return JSON.parse(datajson)}
   catch(e){
console.log("empty")
return []
   }

}

const list=()=>{
   const notes=loadnotes()
   notes.forEach((element) => {
      console.log(element.title)
   });
}
module.exports= {
   data:data,
   addnote:addnote,
   removenote:removenote,
   loadnotes:loadnotes,
   list:list
}