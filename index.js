const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
let array = [];
let calculation;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.innerHTML;
    if (buttonValue === "RESET") {
      result.textContent = "";
      array = [];
    } else if (buttonValue === "DEL") {
      calculation = calculation.slice(0, -1)
      result.textContent = calculation;
      console.log(calculation)
    } else if (buttonValue === "=") {
      result.textContent = eval(calculation);
    } else {
      array.push(buttonValue);
      calculation = array.join("");
      result.textContent = calculation;
    }
  });
});
