
console.log("***** STEP-1 *****");

function showFullName(){
    console.log("My Full Name is : Poonam Nikam");
    console.log("My Fevorate car is : Honda City");
}
showFullName();

console.log("_________________________________________________________________________________________________");
console.log("***** STEP-2 *****");

function personalDetails(firstName,lastName,collegeName){
    console.log("My First Name is :",firstName);
    console.log("My Last Name is :",lastName);
    console.log("My College Name is :",collegeName);
}
personalDetails("Poonam","Nikam","V P College Sangli");

console.log("_________________________________________________________________________________________________");
console.log("***** STEP-3 *****");

function swapDude(value1,value2){
    console.log("Before swap :", value1,value2);
    var temp = value1 ;
    value1 = value2 ;
    value2 = temp ;
    console.log("After swap :", value1,value2);
}
var swapResult = swapDude("Rahul","Poonam");

var swapResult2 = swapDude(1000,2000);

console.log("_________________________________________________________________________________________________");
console.log("***** STEP-4 *****");

function addThreeValue(num1,num2,num3){
    var sum = num1+num2+num3 ;
    return sum ;
}

var sumResult = addThreeValue(12,45,89);
console.log("Sum of Addition :",sumResult);

var sumResult2 = addThreeValue("Hello ","Good ","Morning");
console.log("Sum of Addition :",sumResult2);
