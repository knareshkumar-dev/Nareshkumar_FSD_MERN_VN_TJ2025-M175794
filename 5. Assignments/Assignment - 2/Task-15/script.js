// Task 15: Function to calculate total monthly expenses
let monthlyExpenses = [2000, 1500, 3500, 4000];

function calculateTotal(expenses) {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i];
    }
    return total;
}

let totalSpent = calculateTotal(monthlyExpenses);
console.log("Monthly expenses:", monthlyExpenses);
console.log("Total money spent: ₹" + totalSpent);

