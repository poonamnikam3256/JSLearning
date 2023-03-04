console.log("----------------------------------------> TSC Interview Eligibility <----------------------------------------");

function interviewEligibility(gradeScore,hscScore,sscScore,candidateName){
    if( gradeScore >= 70 || hscScore >= 80 || sscScore >= 90){
        console.log(`Hey ${candidateName} Congrates you are eligible for TSC Interviw...`);
    }
    else{
        console.log(`Unfortunatly ${candidateName}  you Not are eligible for TSC Interviw...`);
    }
}
interviewEligibility(80,86,90,"Poonam");
interviewEligibility(70,65,55,"Geeta");
interviewEligibility(60,79,88,"Divya");