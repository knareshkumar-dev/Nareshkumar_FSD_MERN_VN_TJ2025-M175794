let UserNumber = Number(prompt("Enter Your Number..."));
let EvenOdd = (UserNumber % 2 == 0) ? `Even...` : `is Odd...`;
let PositiveNegative = (UserNumber > 0) ? "Positive" : (UserNumber == 0) ? "Zero" : "Negative";
console.log(`You entered the Number ${UserNumber} is ${EvenOdd} & it is a ${PositiveNegative} value`);