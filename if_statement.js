
function checkEvenOdd(num){
    if (num%2==0){
        return "Even" ;
    }
    if (num%2==1){
        return "Odd" ;
    }

}
var result = checkEvenOdd(45);
console.log(`Given Number "45" is ${result}`);

var result = checkEvenOdd(70);
console.log(`Given Number "70" is ${result}`);

var result = checkEvenOdd(67);
console.log(`Given Number "67" is ${result}`);

var result = checkEvenOdd(98);
console.log(`Given Number "98" is ${result}`);