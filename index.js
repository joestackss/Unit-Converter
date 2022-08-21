const inputText = document.getElementById("inputText");
let meterH = document.getElementById("meterH");
let feetH = document.getElementById("feetH");
let feetH2 = document.getElementById("feetH2");
let meterH2 = document.getElementById("meterH2");


let literH = document.getElementById("literH");
let gallonH = document.getElementById("gallonH");
let gallonH2 = document.getElementById("gallonH2");
let literH2 = document.getElementById("literH2");


let kiloH = document.getElementById("kiloH");

let btnConvert = document.getElementById("btn-convert");

btnConvert.addEventListener("click", function () {
  //   console.log(inputText.value);

  let inputToNumber = Number(inputText.value);

  meterH.textContent = inputText.value;

  literH.textContent = inputText.value;
  kiloH.textContent = inputText.value;

  function meterToFeet() {
    let feet = inputToNumber * 3.281;
    feetH.textContent = feet;
  }

  function literToGallon() {
    let gallon = inputToNumber * 0.264;
    gallonH.textContent = gallon;
  }

  function kilogramToPound() {
    console.log(inputToNumber * 2.204);
  }

  meterToFeet();
  literToGallon();
  kilogramToPound();
});
