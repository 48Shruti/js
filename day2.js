// var array = [1,2,3,4,5,6,7] 
//example 1
//array.splice(startcount, deleteCount,elementslist)

//del number
//var returnDel = array.splice(3,3)

//replace number in array
// var returned =array.splice(3,3,0,2,4,3,3)
// console.log(array)
// console.log("Returned array",returned)
//console.log("Returned array ", returnDel)


//for add
// array.splice(2,0,4,5)
// console.log(array);

//          loops
//while loop (Sum)
// var i =0;
// var sum = 0
// while(i<=3){
//     i++
//     console.log(i);
// }
// sum = sum +i
// console.log("Sum",sum);

//factorial
//for loop (Factorial)
// var Factorial = 1
// for(let i=1;i<=3;i++){
//     console.log(i);
//     Factorial = Factorial* i
// }
// console.log("Factorial",Factorial);


//loops using array
// var sum = 0
// for(let i =0 ;i<array.length;i++){
//     sum += array[i]
// }
// console.log(sum);
 //    for in loop i is iterative variable


//  for(let i in array){
//     console.log(array[i]);
//  }

 //for of loop i is direct element
//  for(let i of array){
//     console.log(i);
//  }

// var array = [1,2,3,4,5,6,7]
// // for each loop using arrow function
// array.forEach((element)=> {
// console.log(element);
// })
// filter
// var newArray = array.filter((element)=>{
//     return element%2 ==0
// })
// console.log(newArray);
// var filterArray = array.filter((item)=>{
//     return item%3 == 0
// })
// console.log(filterArray)

// var studentObj = {
//     //key : value
//     roll : 1,
//     name : "abc",
//     graduation : "ba"
// }
// console.log(studentObj)
// console.log(studentObj.graduation)

// var studentObj = ["Roma","55","Engineeer","MBA Chai vala"]
// console.log(studentObj)

// var studentObj = {
//     name : "Roma",
//     age :"55",
//     bloodGroup :"C+",
//     graduation : "B.tech",
//     postGraduation : "M.tech",
//     company : "Chai ki tappari : kapurtala chowk"
// }
// studentObj.city = "kapurthala"
// console.log(studentObj.city)
// console.log(studentObj.company)
// var abc = JSON.stringify(studentObj)
// console.log(abc);
// var abcd = JSON.parse(abc)
// console.log(abcd)
// var array = [1,4,6,9,6,3]
// var filterArray = array.filter((item)=>{
//      return item%1==0
// })
// console.log(filterArray);
