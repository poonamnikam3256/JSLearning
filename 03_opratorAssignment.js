
console.log("------------------------------------------------***------------------------------------------------");
console.log("___________________________________________________________________________________________________");

function educationalDetails(grdScore,hscScore,sscScore,candidateName){
var result = (grdScore >= 70 || hscScore >= 80 || sscScore > 90) ? `Congrates... ${candidateName} you are eligible for TCS Interview.` : `Unfortunatly ${candidateName} you are not eligible for Interview.` ;
console.log(result);
}

var result = educationalDetails(80,86,90,"*Poonam*");
var result = educationalDetails(70,65,55,"*Geeta*");
var result = educationalDetails(60,79,88,"*Pooja*");

console.log("------------------------------------------------***------------------------------------------------");
console.log("___________________________________________________________________________________________________");
