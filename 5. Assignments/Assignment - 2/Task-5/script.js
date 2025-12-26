// Task 5: Array of numbers - sum and largest
let numbers = [15, 42, 8, 67, 23];
console.log("Array of numbers:", numbers);

// Calculate the sum
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum:", sum);

// Find the largest number
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("Largest number:", largest);

