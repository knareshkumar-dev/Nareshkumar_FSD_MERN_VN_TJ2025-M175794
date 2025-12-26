// Task 3: String operations with name variable
let name = "Naresh Kumar";

// Print "Hello, [name]! Welcome to JavaScript."
let message = `Hello, ${name}! Welcome to JavaScript.`;
console.log(message);

// Convert the name to uppercase
let upperCaseName = name.toUpperCase();
console.log("Uppercase name:", upperCaseName);

// Check if the message has more than 10 characters
let messageLength = message.length;
console.log(`Message length: ${messageLength} characters`);
console.log(`Message has more than 10 characters: ${messageLength > 10}`);

// Check if it contains the word "JavaScript"
let containsJavaScript = message.includes("JavaScript");
console.log(`Message contains "JavaScript": ${containsJavaScript}`);

