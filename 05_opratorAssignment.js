console.log("******************************** STEP - 1 ********************************");

function graterNumber(num1,num2){
var result = num1 > num2 ? num1 : num2 ;
console.log("The Greater Number is :", result);
}
var grtNum = graterNumber(10,-10);
var grtNum = graterNumber(800,899);

console.log("____________________________________________________________________________");
console.log("******************************** STEP - 2 ********************************");

function isEvenOddNum(num){
    var isEvenOddNum = num.length ;
    var result = num %2==0 ? "Even" : "Odd" ;
    console.log("The Given Number is :",result);
    return result ;
}
var number = isEvenOddNum(29);
var number = isEvenOddNum(44);
var number = isEvenOddNum(0);
var number = isEvenOddNum(101);

console.log("____________________________________________________________________________");
console.log("******************************** STEP - 3 ********************************");

function wordLength(word){
    var wordLength = word.length ;
    var result = wordLength %2==0 ? "Even" : "Odd" ;
    return result ;
}
var result = wordLength("Javascript");
console.log(`Word "Javascript" has -> ${result} length`);
console.log(`Word "Developer" has -> ${wordLength("Developer")} length`);
console.log(`Word "Google Chrome" has -> ${wordLength("Google Chrome.")} length` );
