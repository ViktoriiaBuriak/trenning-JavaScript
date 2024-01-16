const celsius = document.querySelector(".conversion-celsius");
const button = document.querySelector(".conversion-btn");
const fahrenheit = document.querySelector(".conversion-fahrenheit");

button.addEventListener("click", temperatureConversion);

function temperatureConversion() {
  const inputValue = parseFloat(celsius.value);

  if (isNaN(inputValue)) {
    alert("Please enter a valid number");
  } else {
    const transform = (inputValue * 9) / 5 + 32;
    fahrenheit.value = transform.toFixed(2);
  }
}
