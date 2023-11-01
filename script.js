const form = document.getElementById("form");

function addition(event) {
  // stopping the form from refreshing automatically after submitting
  event.preventDefault();

  //   getting input values
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  let sum = parseInt(num1) + parseInt(num2);
  let result = `${num1} + ${num2} = ${sum}`;
  document.getElementById("form").reset();

  // displaying result
  document.getElementById("result").innerHTML = result;
}
form.addEventListener("submit", addition);
