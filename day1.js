//for println
// console.log("Hello World")


// //declaration of variable var can be change
// var a = 2
// a =  8
// console.log(a)
// //de
// const b = 4
// console.log(b)
// let c = 3
// c = 2
// console.log(c)


// example declaration of simple functions 
// function show(bool){
//     if(bool){
//     var a = 10
//     console.log(a)
// }
// }
// // show(false)   
// // it is not print at false condition
// show(true)
//print successfully


//example declaration of arrow function
// const show = ()=>{
//     console.log("Arrow function")
// }
// show()


//data and time functions
// var date = new Date()
// console.log(date);
// console.log(date.getTime());
// console.log(date.getFullYear());
// console.log(date.getTime());
// console.log(date.getMilliseconds());

//timestamp provide unique id
// var time = Date.now()
// console.log(time)

//show time after the particular time
// setTimeout(()=>{
//     console.log("I am setTimeout")
// },4000)

//condition is repeated after given timeinterval
// setInterval(()=>{
//     console.log("I am setInterval")
// },4000)

//Arrays
var array = ["Sneha","anjali",34,45,true,{}]
console.log(array);

//add  at ending
array.push(11,34,23)
console.log(array)

//delete at ending
array.pop()
console.log(array)

//delete first element
array.shift()
console.log(array)

//add first element
array.unshift(34,35)
console.log(array)

//print only one element
console.log(array[4])

//array length
console.log(array.length)