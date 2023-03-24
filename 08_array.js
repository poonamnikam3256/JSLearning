
let arrayOfNumber =  [0 ,2 , 3, 4, 5, 6, 7, 8 ];
console.log(arrayOfNumber);
console.table(arrayOfNumber); // using table method

const totalArrayElement = arrayOfNumber.length;
console.log(`Total element available in array is : ${totalArrayElement}`);

//  using include check is available or not 

const is8Available = arrayOfNumber.includes(8);
console.log(`Is 8 available : ${is8Available}`);

const is9Available = arrayOfNumber.includes(9);
console.log(`Is 9 available : ${is9Available}`);

// using index check position of element 

const indexOf8 = arrayOfNumber.indexOf(8);
console.log(`Index of 8 element is : ${indexOf8}`);

const indexOf100 = arrayOfNumber.indexOf(100);
console.log(`Index of 100 element is : ${indexOf100}`);  // Output is --> -1


var arrayNumber = [10,20,25,15,30,5];
const valueAtIndex2 = arrayNumber[2];
console.log(`Value of at index 2 is : ${valueAtIndex2}`);

arrayNumber[3]= 35 ;  // Modify the element 
console.log(arrayNumber);

arrayNumber[1]= 50 ;
console.log(arrayNumber);

console.log("********************* Add New Element Last And Fisrt Position ***********************");

// Adding element in last using push ()
var arrayNumber = [10,20,25,15,30,5];
arrayNumber.push(40);
console.log(arrayNumber);

// Adding element in first using unshift ()
var arrayNumber = [10,20,25,15,30,5];
arrayNumber.unshift(50);
console.log(arrayNumber);

console.log("********************* Removing Last Element And Fisrt Position ***********************");
// Remove last element using pop ()
var arrayNumber = [10,20,25,15,30,5];
arrayNumber.pop();
console.log(arrayNumber);

// Remove first element using shift ()
var arrayNumber = [10,20,25,15,30,5];
arrayNumber.shift();
console.log(arrayNumber);

console.log("******************** Slice Method ************************");
// used for suborderd , particular element

var arrayNum = [10,20,25,15,30,5,40,45];
console.log("------------ slice(startIndex) -------------");
const arrayfromIndex3 = arrayNum.slice(3);
console.log(arrayfromIndex3);


console.log("------------ slice(startIndex , endIndex) -------------");
const subArray = arrayNum.slice(2,5);
console.log(subArray);

console.log("****************************** splice Method *************************************");

var arrayNum = [10,20,25,15,30,5,40,45];
console.log("----------- splice (starIndex) ------------------");
const spliceArray = arrayNum.splice(3);
console.log(`Removed element from array is : ${spliceArray}`);
console.log(arrayNum);

var arrayNum = [10,20,25,15,30,5,40,45];
console.log("----------- splice (starIndex , deletecount) ------------------");
const spliceArrayWithDeleteCount = arrayNum.splice(2,2);
console.log(`Removed element using deletecount is : ${spliceArrayWithDeleteCount}`);
console.log(arrayNum);

var arrayNum = [10,20,25,15,30,5,40,45];
console.log("----------- splice (starIndex , deletecount) ------------------");
const spliceArrayOf20 = arrayNum.splice(1,1);
console.log(`Removed element of 20 is : ${spliceArrayOf20}`);
console.log(arrayNum);

var arrayNum = [10,20,25,15,30,5,40,45];
console.log("----------- splice (starIndex , deletecount) ------------------");
const spliceArrayOf15 = arrayNum.splice(3,1);
console.log(`Removed element of 20 is : ${spliceArrayOf15}`);
console.log(arrayNum);

// Remove 20 25

var arrayNum = [10,20,25,15,30,5,40,45];
console.log("----------- splice (starIndex , deletecount) ------------------");
const spliceArrayOf2 = arrayNum.splice(1,2);
console.log(`Removed element of 20 is : ${spliceArrayOf2}`);
console.log(arrayNum);

console.log("------------------ Add Or Insert Element Without Replacing ----------------------");

console.log("------------------spilce() to insert one element without replacing existing element ---------------------");

var arrayNum = [10,20,25,15,30,5,40,45];
arrayNum.splice(2,0,22);
console.log(arrayNum);

console.log("------------------spilce() to insert three element without replacing existing element ---------------------");
var arrayNum = [10,20,25,15,30,5,40,45];
arrayNum.splice(4,0,5,35,55);
console.log(arrayNum);

console.log(" --------- spilce () to replace one element  ------------- ");
var arrayNum = [10,20,25,15,30,5,40,45];
arrayNum.splice(2,1,50,60);
console.log(arrayNum);

console.log(" --------- spilce () to replace two element  ------------- ");
var arrayNum = [10,20,25,15,30,5,40,45];
arrayNum.splice(2,2,70,80);
console.log(arrayNum);
