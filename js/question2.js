/* Input calcuation */
const num1 = Number(prompt('Enter a number:'));
const num2 = Number(prompt('Enter another number:'));

function sum (num1, num2){
  return (num1 + num2);
}

// show output on page
document
  .getElementById("output")
  .appendChild(document.createTextNode(`The sum of the numbers not divisible by ${num1} or ${num2}`));
document.getElementById("ouput").appendChild(sum);