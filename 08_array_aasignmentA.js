

var arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is : ${arraySeasonalFruits}`);
console.log("--------STEP-1----------");
const firstElement = arraySeasonalFruits[0];
const lastElement = arraySeasonalFruits[arraySeasonalFruits.length-1];
console.log(`First Element is : ${firstElement}`);
console.log(`Last Element is : ${lastElement}`);

console.log("--------STEP-2----------");
var arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is : ${arraySeasonalFruits}`);
arraySeasonalFruits.unshift("Papaya");
console.log(`Array after adding Papaya at fisrt element is : ${arraySeasonalFruits}`);

console.log("--------STEP-3----------");
var arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is : ${arraySeasonalFruits}`);
const spliceArrayofMango = arraySeasonalFruits.splice(3,1);
console.log(`Array after remove element of Mango is : ${arraySeasonalFruits}`);

console.log("--------STEP-4----------");
var arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is : ${arraySeasonalFruits}`);
arraySeasonalFruits.push("Pineapple");
console.log(`Array after adding Pineapple at last position is : ${arraySeasonalFruits} `);

console.log("--------STEP-5----------");
var arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is : ${arraySeasonalFruits}`);
arraySeasonalFruits.splice(4,0,"Dragon Fruit");
console.log(`Adding Dreagon fruit before Water Melon Reasult is : ${arraySeasonalFruits}`);

console.log("--------STEP-6----------");
var arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is : ${arraySeasonalFruits}`);
arraySeasonalFruits.splice(1,1,"Kiwi");
console.log(`Replace Orang with Kiwi Reasult is : ${arraySeasonalFruits}`);

console.log("--------STEP-7----------");
var arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is : ${arraySeasonalFruits}`);
const subArray = arraySeasonalFruits.slice(1,4);
console.log(`Index of 1 to 3 Reasult is : ${subArray}`);

console.log("--------STEP-8----------");
var arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given Array is : ${arraySeasonalFruits}`);
const last3Element = arraySeasonalFruits.slice(2);
console.log(`Last 3 Element is : ${last3Element}`);


