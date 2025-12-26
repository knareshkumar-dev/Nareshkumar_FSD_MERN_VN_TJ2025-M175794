let marks = Number(prompt("Enter a Marks..."));
let age = Number(prompt("Enter Your Age..."));

let gradeResult = (marks >= 90) ? "Grade A" : (marks >= 80) ? "Grade B" : (marks >= 50) ? "Grade C" : "Grade F" 
let adultMinor = (age >= 18) ? "Adult" : "Minor";

console.log(`Your are ${gradeResult}, and You are a ${adultMinor}`);
