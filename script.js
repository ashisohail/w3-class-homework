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

// Function to change style of result tag
const styleHandlerMouseOver = () => {
  document.getElementById("result").style.backgroundColor = "lightblue";
};

const styleHandlerMouseOut = () => {
  document.getElementById("result").style.backgroundColor = "white";
};

document
  .getElementById("result")
  .addEventListener("mouseover", styleHandlerMouseOver);
document
  .getElementById("result")
  .addEventListener("mouseout", styleHandlerMouseOut);
