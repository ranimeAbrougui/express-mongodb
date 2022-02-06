const {sum,multiple} = require ("./utils/utils")
const {mins} = require ("./utils/test")
const images = [{title:"bacelone", source:"https://www.docplanner.com/images/warsaw.png"},{title:"warsaw", source:"https://www.docplanner.com/images/warsaw.png"},{title:"warsaw", source:"https://www.docplanner.com/images/warsaw.png"}]
const numbers = [ 1,2,3,4,5,6,7,8,9]
// numbers.forEach((number)=>{
//     console.log(number)
// })

// images.forEach((marwa)=>{
//     if(marwa.title === "warsaw"){
//         console.log(marwa)
//     }
    
   
// })


numbers.forEach((number)=>{
    console.log(sum(number,number))
    console.log(multiple(number,number))
    console.log(mins(number,number))
})