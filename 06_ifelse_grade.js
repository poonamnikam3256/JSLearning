console.log("-----------------------------> Voting Eligibility <-----------------------------");

function voteEligibility(age){
    if( age == undefined || age == null || age == 0 || age > 120){
        console.log(`Invalid Data---> your age ${age} is not valid`);
    }
    else if( age >= 18 ){
        console.log(`You are eligible for vote becouse your age is ${age}`);
    }
    else{
        console.log(`You are Not eligible for vote becouse your age is ${age}`);
    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(undefined);
voteEligibility(null);

console.log("-----------------------------> Grade Calculation <-----------------------------");

function gradeCalculation(marks){
    if( marks <= 0 || marks > 100 || typeof marks !="number"){
        console.log(`Please Provide the valid marks--- ${marks} `);
    }
    else if( marks >= 90){
        console.log(`Funstatic Marks : ${marks} , your grade is "A+"`);
    }
    else if( marks >= 75 && marks <= 90){
        console.log(`Excellent Marks : ${marks} , your grade is "A"`);
    }
    else if( marks >= 50 && marks <= 75){
        console.log(`Good Marks : ${marks} , your grade is "B"`);
    }
    else if( marks >= 35 && marks <= 50){
        console.log(`Marks is : ${marks} , your grade is "C" , Need Improvment`);
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(9);
gradeCalculation("seventy one");
gradeCalculation(NaN);
gradeCalculation(undefined);
gradeCalculation(null);