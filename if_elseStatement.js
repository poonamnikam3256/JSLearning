
function maleMarriageEligibility(gender,age,boyName){
    if(gender=="Male" && age>21){
        console.log(`Hey "${boyName}" You are Eligible for Marriage...`);
    }
    else {
        console.log(`Hey "${boyName}" You are Not Eligible for Marriage...`);
    }
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew jobs");
console.log("____________________________________________________________________________________________");

function femaleMarriageEligibility(gender,age,girlName){
    if(gender="Female" && age>=18){
        console.log(`Hey "${girlName}" You are Eligible for Marriage...`);
    }
    else {
        console.log(`Hey "${girlName}" You are Not Eligible for Marriage...`);
    }
}

femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");