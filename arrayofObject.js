var arrayObj = [{
    name : "Virat Kohli",
    age :"34",
    iplteam : "RCB"
},{
    name : "Rohit Sharma",
    age : "43",
    iplteam : "Mumbai Indians"
},{
    name : "Msd",
    age : 45,
    iplteam : "Chennai Super King"
},{
    name : "Siraj",
    age : 28,
    iplteam : "RCB"
},{
    name : "Jadeja",
    age : 35,
    iplteam : "Chennai Super King"
},{
    name : "Ishan Kishan",
    age : 25,
    iplteam : "Mumbai Indians"
}]
console.log(arrayObj)
var filterList = arrayObj.filter((item)=>{
    return item.iplteam == "RCB"
})
console.log(filterList);