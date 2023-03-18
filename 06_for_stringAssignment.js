
var str1 = "JavaScript is the language Of Internet" ;
var count = 0 ;
for (let index = 0; index < str1.length; index++) {
    var char = str1.charAt(index) ;
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" 
     || char == "A" || char == "E" || char == "I" || char == "O" ||char == "U") {
    count = count + 1 ;
    }
}

console.log(`Given string is : ${str1}`);
console.log(`Total number of vowels count is : ${count}`);

var str2 = "I am Angular Developer" ;
var count = 0 ;
for (let index = 0; index < str2.length; index++) {
    var char = str2.charAt(index) ;
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" 
     || char == "A" || char == "E" || char == "I" || char == "O" ||char == "U") {
    count = count + 1 ;
    }
}

console.log(`Given string is : ${str2}`);
console.log(`Total number of vowels count is : ${count}`);

var str3 = "Hard work and commitment is the key Of success" ;
var count = 0 ;
for (let index = 0; index < str3.length; index++) {
    var char = str3.charAt(index) ;
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" 
     || char == "A" || char == "E" || char == "I" || char == "O" ||char == "U") {
    count = count + 1 ;
    }
}

console.log(`Given string is : ${str3}`);
console.log(`Total number of vowels count is : ${count}`);