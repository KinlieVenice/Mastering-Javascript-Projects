const textBox = document.getElementById("textBox");
let toF = document.getElementById("toF");
let toC = document.getElementById("toC");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

function convert() {
  toConvert = Number(textBox.value);
  if (toF.checked) {
    let conversion = (toConvert * 9) / 5 + 32;
    result.textContent = conversion.toFixed(3) + "°F";
  } else if (toC.checked) {
    let conversion = ((toConvert - 32) * 5) / 9;
    result.textContent = conversion.toFixed(3) + "°C";
  }
}

btn.addEventListener("click", convert);
