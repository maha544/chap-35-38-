//Chapter 35 - 37 (Functions)

//Q1

// function displayArt(){

// }

// //Q2 

// function askName(){
//     user= prompt("enter your name")
//     console.log(user);
//     return user;
// }

// var userName = askName();

//Q3

// function callTwoFunctions() {
//     functionA();
//     functionB();
//   }
//   function functionA() {
//     console.log("This is functionA");
//   }
  
//   function functionB() {
//     console.log("This is functionB");
//   }
  
//   callTwoFunctions();
  

//Q4

// function askName(){
//     user= prompt("enter your name")
//     alert(user);
//       return user;
// }
    
// var userName = askName();

//Q5

// function concat(letterT, letterI, letterE) {
//   //our function
//   console.log(letterT, letterI, letterE);
// }
// var variable = 42;
// var string = "Welcome";
// var number = 7;

// concat(variable, string, number);

//Q6

// function mix(one ,two){
//     together = one + two;
//     console.log(together);
//     return together;
// }

// var answerConcat = mix(20 , 2);
// console.log(answerConcat);

//Q7

// function value(para1 , para2 , para3){
//     multiply = para1 * para2 * para3;
//     console.log(multiply);
//     return multiply;
// }
  
// var answerOfMultiply = value(2 , 2 , 2);
// console.log("Answer is :" answerOfMultiply);

//Q8

// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//       return 0;
//     }
  
//     var sum = 0;
  
//     for (var i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
  
//     var average = sum / numbers.length;
//     return average;
// }

// var numbersArray = [10, 20, 30, 40, 50];
// var result = calculateAverage(numbersArray);
// console.log("Average:", result);

//Q9

// function addNumbers(a, b) {
//     var sum = a + b;
//     return sum;
//   }
  

// var numA = 5;
// var numB = 5;
// var result = addNumbers(numA, numB);
// console.log("Sum:", result);

//Q10

// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//       return 0;
//     }
  
//     var sum = 0;
  
//     for (var i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
  
//     var average = sum / numbers.length;
//     return average;
// }

// var numbersArray = [10, 20, 30, 40, 50];
// var result = calculateAverage(numbersArray);
// console.log("Average:", result);

//Q11

// function addNumbers(a, b) {
//     var sum = a + b;
//     return sum;
//   }
  

// var numA = 5;
// var numB = 5;
//here we capture the value and store them in variables
// var result = addNumbers(numA, numB);
// console.log("Sum:", result);

//Q12

// function letterCounts(word) {
//     var counts = {};
  
//     for (var i = 0; i < word.length; i++) {
//       var letter = word[i].toLowerCase();
//       if (counts[letter] === undefined) {
//         counts[letter] = 1;
//       } else {
//         counts[letter]++;
//       }
//     }
  
//     return counts;
// }
// var word = "Words";
// var result = letterCounts(word);
// console.log(result);

//Q13

// function setYear(myDate, year) {
//     myDate.setFullYear(year);
//     console.log(myDate);
// }
  

// var myDate = new Date();
// var newYear = 2023;
  
// setYear(myDate, newYear);

//Q14


function calculateAge(userBirthdate) {
    var currentDate = new Date();
    var ageInMilliseconds = currentDate - userBirthdate;
    var ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    var age = Math.floor(ageInYears);
  
    return age;
}
  

var userBirthdate = new Date("1990-05-15");
var personAge = calculateAge(userBirthdate);
console.log("Your age is: " + personAge + " years");

//Q15

function toFindWord(word, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].toLowerCase() === word.toLowerCase()) {
        return true;
      }
    }
    return false; 
  }
  

var wordCheck = "Hassan";
var namesArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
  
var isWordPresent = toFindWord(wordCheck, namesArray);
console.log(isWordPresent);

//Q16

function repeatLetter(letter, times) {
    return letter.repeat(times);
  }

var repeatingLetters = repeatLetter("a", 10);
console.log(repeatingLetters);

//Q17

function reverseArray(arr) {
    return arr.reverse();
  }

var array = ['a', 'b', 'c', 'd', 'e'];
var reversedArray = reverseArray(array);
console.log(reversedArray);
  

//Q18

function number(x) {
    var reversedString = x.toString().split('').reverse().join('');
    return reversedString;
  }

var reversedNumber = number(32243);
console.log(reversedNumber);

//Q19

function palindromeWord(x) {
    // removal of non-alphanumeric characters using this (/[^a-zA-Z0-9]/g, '')
    var cleanStr = x.toString().toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    
    // Reverse the string
    var reverseStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === reverseStr;
}

var givenWord = "Wow";
var result = palindromeWord(givenWord);
  
if (result) {
    console.log(givenWord + " is a palindrome.");
} else {
    console.log(givenWord + " is not a palindrome.");
}

//Q20

function capitalWord(str){
  var line = str.split(' ');

  for (var i= 0 ; i < line.length ; i++){
    var words = line[i];
    line[i] = words.charAt(0).toUpperCase() + words.slice(1);
  }
  return line.join(' ');
}

var lineStr = "the quick brown fox";
var result = capitalWord(lineStr);
console.log(result);


//Q21

function findNum(numbers){
  var max = numbers[0];
  var min = numbers[0];

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < max) {
      max = numbers[i];
    } else if (numbers[i] > min) {
      min = numbers[i];
    }
  }

  return max + ',' + min;
}
  
var numArr =  [1, 2, 3, 4, 5];
var result = findNum(numArr);
console.log(result);

//Chapter 38 (Local vs. Global Variables)

//Q1

// function exp(a , b){
//   //local varaible that are made in function are only be accessible in function 
//   // or outside the function we can't call 'abc' varaible because it is local varaible
//   var abc= a + b;
//   console.log(abc);
// }
// exp(12 , 5);
  
  
  
//Q2

var globVariable = 30;
function exp(a){
  var amount = a * globVariable;
  console.log(amount);
}
  
exp(4 , globVariable);  
  
  
  