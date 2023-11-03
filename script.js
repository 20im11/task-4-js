"use strict";

// task 1

let array = "12345";
let result = array.split("");
let resultNumbers = result.map(Number);
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += resultNumbers[i];
}
console.log(sum);

// task 2

let array1 = ["hello1", 14, 24, "hello2"];

let numbersOnly = array1.filter(function (item) {
  return typeof item === "number";
});
console.log(numbersOnly);

// task 3

let array2 = [14, 150, "css", null, "javascript", 25];
let newResult = array2.map(function (value) {
  if (typeof value === "number") {
    return value * value;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  }
  return null;
});
console.log(newResult);

// task 4

let info = "Good day";
let newResult2 = info.slice(5, 8);
console.log(newResult2);

// task 5

let newFunc = (x) => x.length;

let funcTest = "this is for a test";
let result3 = newFunc(funcTest);
console.log(result3);

// task 6

let ask = prompt("საქართველოს დედაქალაქი?");
let expAnswer = "tbilisi";
let usersAnswer = ask.toLowerCase();
if (usersAnswer === expAnswer) {
  console.log("სწორია");
} else {
  console.log("არასწორია");
}

// task 7

let link = "https://google.com";
if (link.includes("https://")) {
  console.log("კი,მოიცავს");
} else {
  console.log("არ მოიცავს");
}

// task 8

let fruits = ["apple", "mango", "avocado", "kiwi"];
fruits.splice(-2, 1, "strawberry");
console.log(fruits);

// task 9

let array5 = [5, 25, 89, 120, 36];
array5.push("javaScript", "Python");
array5.unshift("html", "css");
console.log(array5.length);
array5.splice(0, 1);
array5.splice(-1, 1);
let deletedItems = array5.splice(0, 1).concat(array5.splice(-1, 1));
console.log(deletedItems);

// task 10

let arrayFruits = ["ფორთოხალი", "ბანანი", "მსხალი"];
console.log(arrayFruits.length);
arrayFruits.push("ვაშლი", "ანანასი");
arrayFruits.unshift("საზამთრო");
console.log(arrayFruits.length);
arrayFruits.splice(2, 0, "მანგო");
arrayFruits.splice(0, 1);
arrayFruits.pop();
console.log(arrayFruits.length);

// task 11

let array6 = [1, 2, 3, 4, 5];
array6.splice(3, 0, "a", "b", "c");
console.log(array6);

// task 12

let arr1 = [1, 2, 3, 4, 5];
let sum2 = 0;
arr1.forEach((elements) => (sum2 += elements));
console.log(sum2);

// task 13

let array7 = [12, 25, 3, 6, 8, 14, 7, 23];
let resultOfDevide = array7.map((item) => item / 3);
console.log(resultOfDevide);

// task 14

let languages = ["html", "css", "javascript", "python", "php"];
let languageFilter = languages.filter((elements2) => elements2.length > 3);
console.log(languageFilter);

// task 15

let words = ["Madrid", "Rome", "Milan", "Berlin"];
let resultWords = words.filter((citys) => citys.includes("m"));
let resultWords2 = words.filter((citys2) => citys2.includes("M"));
let finalResultCitys = resultWords.concat(resultWords2);
console.log(finalResultCitys);
// ამ დავალებაში,როდესაც გამოვიყენე || ნიშანი "ან"-ისთვის,შესაბამისი შედეგი ვერ მივიღე

// task 16

let arr2 = [-1, -2, -3, 4];
let numberResults = (items) => items > 0;
console.log(arr2.some(numberResults));

// task 17

let arrayNew = [2, 15, 10, 24];
let lastResult = arrayNew.splice(2, 1);
console.log(arrayNew);
