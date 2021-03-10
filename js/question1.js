//Given the following Array with employee objects

//Given the following Array with employee objects

const employeeList = [

  {

      name: "Amy",

      scores: []

  },

  {

      name: "Beth",

      scores: []

  },

  {

      name: "Chuck",

      scores: []

  },

  {

      name: "Dave",

      scores: []

  },

  {

      name: "Eric",

      scores: []

  },

  {

      name: "Fran",

      scores: []

  },

  {

      name: "Gina",

      scores: []

  },

  {

      name: "Henry",

      scores: []

  }

];

 

//PART I - Populate Array

//Write code to populate the employee's scores.

//Notes:

//  Employees must take at least 3 tests

//  Employees may take 7 tests

//  

//Task

//For each employee, generate a random number between 3 and 7 (number of tests taken)

//  For each test, assign a random score between 61 and 100

//

//Example:

//  Assume Amy took 4 tests.  The result for Amy may look as follows:

//   {

//     name: "Amy",

//     scores: [75, 98, 82, 93]

//   },

 

// Hint:

//  Loop through the employeeList Array

//    For each iteration, generate a random number between 3 to 7 (number of tests)

//    Iterate through the number of tests, adding a value to the scores between 61 and 100.

 

 

// << YOUR CODE HERE >>

 

 

//You could use the following to test the updated list:

//console.log(employeeList);

 

//PART II - Summary Data

//Create an array of objects, each object containing the following:

// name

// scores

// numberOf Tests

// avgScore

// minScore

 

//Notes

//  You must use functional programming techniques (map, reduce, filter)

//  DO NOT write a traditional loop

 

//Sample object for "Amy" 

// This is just an example, your values will vary depening on number of tests and test scores

//  As above, Assume Amy took 4 tests

//   {

//     name: "Amy",

//     scores: [75, 98, 82, 93],

//     numberOfTests: 4,

//     avgScore: 87,

//     minScore: 75

//   },

 

 

// << YOUR CODE HERE >>

 

 

//PART III - Output the results

// Output the summarized data to the console.  Must use the following format:

// Hint: Loop through the array

//Name: Amy

//Scores: 75, 98, 82, 93

//Number of tests: 4

//Average score: 87

//Min score: 75

 

 

// << YOUR CODE HERE >>