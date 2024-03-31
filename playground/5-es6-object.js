const name='andrew'
const userage =27
const user ={
    name,
    userage,
    location:"wardha"
}
console.log(user)

//obje destructing
const product ={
    label:"rednotebook",
    price :"3",
    stack:"3",
    saleprice:undefined
}
const {label:productLAble,stack,rating=5} = product
console.log(productLAble)
console.log(stack)
console.log(rating)