var marks = 70 ;
var result = marks >=60 ? "Allow Him for Interview" : "Don't allow" ;
console.log(result);

console.log("Even or Odd");
var myNumer = 7;
var result = myNumer %2==0 ? "Even" : "Odd" ;
console.log(result);


var num1 = 10 ;
var num2 = 12 ;
var result = num1 > num2 ? num1 :num2;
console.log(result);

function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word "JavaScript" has ${result} length` );
 // var result = wordLength("Google");
 console.log(`Word "Google" has ${wordLength("Google Chrome")} length` );


 function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);