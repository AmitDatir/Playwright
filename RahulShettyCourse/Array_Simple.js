/*
Create an array called expenses that contains at least 5 different expense amounts.

Calculate the total expenses by summing all the elements of the array.

Find the highest and lowest individual expenses within the array.
*/


//Simple:
// Create an array with at least 5 expense amounts
let expenses = [120, 75, 300, 50, 200];

// Calculate total expenses
let total = 0;
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
}

// Find highest and lowest expense
let highest = expenses[0];
let lowest = expenses[0];

for (let i = 1; i < expenses.length; i++) {
    if (expenses[i] > highest) {
        highest = expenses[i];
    }
    
    if (expenses[i] < lowest) {
        lowest = expenses[i];
    }
}

// Output results
console.log("Expenses:", expenses);
console.log("Total Expenses:", total);
console.log("Highest Expense:", highest);
console.log("Lowest Expense:", lowest);



/*
Expenses: [120, 75, 300, 50, 200]
Total Expenses: 745
Highest Expense: 300
Lowest Expense: 50
*/



//Optimized1:
// Array of expenses
const expenses = [120, 75, 300, 50, 200];

// Total expenses
const total = expenses.reduce((sum, expense) => sum + expense, 0);

// Highest expense
const highest = Math.max(...expenses);

// Lowest expense
const lowest = Math.min(...expenses);

console.log("Expenses:", expenses);
console.log("Total Expenses:", total);
console.log("Highest Expense:", highest);
console.log("Lowest Expense:", lowest);



//Optimized2:
const expenses = [120, 75, 300, 50, 200];

let total = 0;
let highest = expenses[0];
let lowest = expenses[0];

expenses.forEach(function(expense) {
    total += expense;

    if (expense > highest) {
        highest = expense;
    }

    if (expense < lowest) {
        lowest = expense;
    }
});

console.log("Total Expenses:", total);
console.log("Highest Expense:", highest);
console.log("Lowest Expense:", lowest);



//one liner:
const expenses = [120, 75, 300, 50, 200];

const result = expenses.reduce((acc, val) => ({
    total: acc.total + val,
    highest: Math.max(acc.highest, val),
    lowest: Math.min(acc.lowest, val)
}), { total: 0, highest: expenses[0], lowest: expenses[0] });

console.log("Total Expenses:", result.total);
console.log("Highest Expense:", result.highest);
console.log("Lowest Expense:", result.lowest);
