const square= function( x ){
return x*x
}

const sq = (x)=>{
    return x*x
}

const event = {
    name:"sagar",
    list:["s","w"],
    printguest(){
        console.log("guest list "+ this.name)
        this.list.forEach(element => {
            console.log(element + this.name)
        });
    }
}
// console.log(square(3))
// console.log(sq(9))
event.printguest()