//hetrogenous array in js
var array = [1,3,5,5,3,"apple",43.3,"abc"];
console.log("array",array);

// add element at last
array.push(7);
console.log("add element at last",array);

//delete element at last
array.pop();
console.log("delete element at last",array);

//delete element at first
array.shift(9);
console.log("delete element at first",array);

//add element at first
array.unshift(8);
console.log("add element at first",array);

//to find length
console.log("Array length",array.length)

//change array using index
array[4]= 'hey';
console.log(array);