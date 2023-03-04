console.log("------------------------------------------------** STRING ASSIGNMENT **------------------------------------------------");
console.log("_______________________________________________________________________________________________________________________________");

function myDreamCompany(){
    var comName = "Infosys..";
    console.log("My Dream Company is :", comName);
}
var comName =myDreamCompany(comName);

function myHobby(){
    var hobby1 = "1) I Like Singing...";
    var hobby2 = "2) I Like Bike Riding....";
    var hobby3 = "3) I Like Rrading Books.......";
    // var result = hobby1 + hobby2 + hobby3 ;

    console.log("_______________________________________________________________________________________________________________________________");
    console.log("My Hobbies are :",hobby1,hobby2,hobby3);

    console.log("_______________________________________________________________________________________________________________________________");
    console.log("Total Number of Character Hobby1 :",hobby1.length);
    console.log("Total Number of Character Hobby2 :",hobby2.length);
    console.log("Total Number of Character Hobby3 :",hobby3.length);
    
    console.log("_______________________________________________________________________________________________________________________________");
    var sum = hobby1.length+hobby2.length+hobby3.length;
    console.log("Addition of three variables count is :", sum);

}
myHobby();