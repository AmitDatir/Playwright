/*
Create an array named studentNames with the names of your students.

Add a new student name to the beginning of the array.

Remove the last student name from the array.

Alphabetize the student names within the array.
*/



//Simple:
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
