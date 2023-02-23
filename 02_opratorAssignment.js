console.log("************************** STEP-1 **************************" );

function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? ` Marrage Status -> Hey ${boyName} you are eligible for marriage.` : ` Marrage Status -> Hey ${boyName}  you are NOT eligible for marriage.` ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);

  var result = maleMarriageEligibility("Male", 17, "Stew Jobs");
  console.log(result);

console.log("__________________________________________________________________________________________");
console.log("************************** STEP-2 **************************" );

function femaleMarriageEligibility(gender,age,girlName){
    var result = (gender=="Female" && age>=18) ? ` Marrage Status -> Hey ${girlName} you are eligible for marriage.` : ` Marrage Status -> Hey ${girlName}  you are NOT eligible for marriage.` ;
    return result ;
}
var result = femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(result);

var result = femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(result);
