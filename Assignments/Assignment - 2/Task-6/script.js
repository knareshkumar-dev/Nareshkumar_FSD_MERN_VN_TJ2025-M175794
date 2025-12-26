// Task 6: Theatre booking system
let totalSeats = 120;
let bookedSeats = 78;

// Calculate available seats
let availableSeats = totalSeats - bookedSeats;
console.log(`Total Seats: ${totalSeats}`);
console.log(`Booked Seats: ${bookedSeats}`);
console.log(`Available Seats: ${availableSeats}`);

// Check status based on available seats
let status;
if (availableSeats < 20) {
    status = "Almost Full";
} else if (availableSeats >= 20 && availableSeats <= 60) {
    status = "Moderate Availability";
} else {
    status = "Plenty of Seats Available";
}

console.log(`Status: ${status}`);
console.log(`Exact number of seats left: ${availableSeats}`);

