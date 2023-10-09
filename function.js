// simple function with void return
function first(){
    console.log("Function is created");
}
//call function
first();

//return 
function second(int){
    if(int){
        var a = 10;
        console.log("Integer value is ", a);
    }else{
        var b = 20.49;
        console.log("Float value is ",b);
    }
}
second(23); // call function

// another example
function third(String){
    if(String){
        var a = "Apple";
        console.log("String is", a);
    }else{
        var b = 20;
        console.log("Interger is ",b)
    }
}
    // call function
    third();

// arrow function
const a= ()=>{
    console.log("Arrow function");
}
a();

// date and time function
var date = new Date()
console.log(date);
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getFullYear());
console.log(date.getMinutes());
console.log(date.getMonth());

//set time interval
// setInterval(()=>{
//     console.log("Time set interval")
// },3000);

//time set to show
setTimeout(()=>{
    console.log("Time out")
},4000);