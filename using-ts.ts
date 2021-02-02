const button = document.querySelector("#button");
const input1 = document.querySelector("#num1");
const input2 = document.querySelector("#num2");

button.addEventListener("click", function () {
  add(input1.value, input2.value);
});

function add(num1, num2) {
  return num1 + num2;
}
