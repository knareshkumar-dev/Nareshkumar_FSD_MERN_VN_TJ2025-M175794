// Task 9: Delivery persons earnings comparison
let person1Earnings = 300;
let person2Earnings = 500;

// Use ternary operator to print who earns more and by how much
let result = person1Earnings > person2Earnings
    ? `Person 1 earns more by ₹${person1Earnings - person2Earnings}`
    : `Person 2 earns more by ₹${person2Earnings - person1Earnings}`;

console.log(`Person 1 earns: ₹${person1Earnings}`);
console.log(`Person 2 earns: ₹${person2Earnings}`);
console.log(result);

