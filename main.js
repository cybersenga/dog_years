//Variable for human age
var myAge = 80;

//First two dog years
var earlyYears = 2;

earlyYears *= 10.5;

//Subtract dog early years from human age
laterYears = myAge - 2;

laterYears *= 4;

//Human years in dog's
myAgeInDogYears = earlyYears + laterYears;

//Lowercase
var myName = "Agnes".toLowerCase();

//String interpolation
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
