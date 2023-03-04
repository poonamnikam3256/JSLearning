console.log("-----------> Implicit conversion to string <-----------");

//numric string used with + gives string type 
let result ;
result = '3' + 2 ;
console.log(result);  //32

result = '3' + true ;
console.log(result); //"3true"

result = '3' + undefined ;
console.log(result); // "3undefined"

result = '3' + null ;
console.log(result); //"3null"

console.log("-----------> Implicit boolean conversion to Number <-----------");

//if boolean is used , true is 1 , false is 0

let result2;

result2 = '4' - true ;
console.log(result2); // 3

result2 = 4 + true ;
console.log(result2); // 5

result2 = 4 + false ;
console.log(result2); // 4


console.log("-----------> Implicit string conversion to Number <-----------");

// numric string used with - , /, * result number type

let result3 ;

result3 = '4' - '2' ;
console.log(result3);  // 2

result3 = '4' - 2 ;
console.log(result3);  // 2

result3 = '4' * 2 ;
console.log(result3);  // 8

result3 = '4' / 2 ;
console.log(result3);  // 2

console.log("-----------> Undifined used with number,boolean or null given NAN  <-----------");

// arithmetic opration of undifined with number , boolean or null given NAN  

let result4 ;

result4 = 4 + undefined ;
console.log(result4); // NAN

result4 = 4 - undefined ;
console.log(result4); // NAN

result4 = true + undefined ;
console.log(result4); // NAN

result4 = null + undefined ;
console.log(result4); // NAN

console.log("-----------> Explicit conversion   <-----------");

// string to number 
result = Number('324');
console.log(result);

result = Number('324e-1') ;
console.log(result); //32.4

// boolean to number 
result = Number(true);
console.log(result); //1

result = Number(false);
console.log(result); //0

console.log("-----------> Explicit conversion:Invalid string to number return NAN  <-----------");

let result5 ;

result5 = Number('hello');
console.log(result5);  // NAN


result5 = Number(undefined);
console.log(result5);  // NAN

result5 = Number(NaN);
console.log(result5);  // NAN

console.log("-----------> Explicit conversion:string to number using + oprator  <-----------");

var numberInString = "100" ;
console.log(typeof numberInString);

var myNumber = +numberInString ;
console.log(typeof myNumber);

console.log("-----------> Explicit conversion:number to string data type conversion using toString() method  <-----------");

var myNumber = 100 ;
console.log(typeof myNumber); //Number

var afterConversion = myNumber.toString();
console.log(typeof afterConversion); // String