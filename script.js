const form = document.getElementById("sumForm");
const resultElement = document.getElementById("result");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the input values
  const number1 = parseInt(document.getElementById("number1").value);
  const number2 = parseInt(document.getElementById("number2").value);

  // Add the two numbers
  const sum = number1 + number2;

  // Display the result on the webpage
  resultElement.textContent = `The sum of ${number1} and ${number2} is: ${sum}`;
});


//this repo havent any access and need to folk
