/*
Create an array named studentNames with the names of your students.

Add a new student name to the beginning of the array.

Remove the last student name from the array.

Alphabetize the student names within the array.
*/



// Create an array with student names
let studentNames = ["Rahul", "Amit", "Sneha", "Priya", "Rohan"];

// Add a new student to the beginning
studentNames.unshift("Anita");

// Remove the last student
studentNames.pop();

// Sort the student names alphabetically
studentNames.sort();

// Display the result
console.log("Final Student List:", studentNames);

/*
Final Student List: [ 'Amit', 'Anita', 'Priya', 'Rahul', 'Sneha' ]
*/



/*
You have an array called productPrices with various product prices.

Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.

Use the filter method to create a new array called affordableProducts containing only products priced below $50

Calculate the total cost of all items in the affordableProducts array using the reduce method.
*/


// Array of product prices
const productPrices = [30, 55, 20, 75, 40, 60];

// Apply 10% discount using map
const discountedPrices = productPrices.map(price => price * 0.9);

// Filter products below $50
const affordableProducts = discountedPrices.filter(price => price < 50);

// Calculate total cost of affordable products
const totalCost = affordableProducts.reduce((sum, price) => sum + price, 0);

// Output results
console.log("Original Prices:", productPrices);
console.log("Discounted Prices:", discountedPrices);
console.log("Affordable Products (< $50):", affordableProducts);
console.log("Total Cost of Affordable Products:", totalCost);



/*
Original Prices: [30, 55, 20, 75, 40, 60]
Discounted Prices: [27, 49.5, 18, 67.5, 36, 54]
Affordable Products: [27, 49.5, 18, 36]
Total Cost of Affordable Products: 130.5


Explanation
map() → Applies 10% discount to each price (price * 0.9)
filter() → Keeps only prices below $50
reduce() → Adds all values in the affordable products array
*/




//************************************************//
/*
Common JavaScript array methods interviewers love asking:

Method	Purpose
push()	Add element to end
pop()	Remove element from end
unshift()	Add element to beginning
shift()	Remove element from beginning
sort()	Sort array
splice()	Add/remove elements anywhere
*/
