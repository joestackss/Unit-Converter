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
let poundH = document.getElementById("poundH");
let poundH2 = document.getElementById("poundH2");
let kiloH2 = document.getElementById("kiloH2");

let btnConvert = document.getElementById("btn-convert");

btnConvert.addEventListener("click", function () {
  let inputToNumber = Number(inputText.value);

  meterH.textContent = inputText.value;
  feetH2.textContent = inputText.value;

  literH.textContent = inputText.value;
  gallonH2.textContent = inputText.value;

  kiloH.textContent = inputText.value;
  poundH2.textContent = inputText.value;

  function meterToFeet() {
    let feet = inputToNumber * 3.281;
    feetH.textContent = feet.toFixed(1);
  }

  function feetToMeter() {
    let meter = inputToNumber * 0.305;
    meterH2.textContent = meter.toFixed(1);
  }

  function literToGallon() {
    let gallon = inputToNumber * 0.264;
    gallonH.textContent = gallon.toFixed(1);
  }

  function gallonToLiter() {
    let liter = inputToNumber * 3.785;
    literH2.textContent = liter.toFixed(1);
  }

  function kilogramToPound() {
    let pound = inputToNumber * 2.204;
    poundH.textContent = pound.toFixed(1);
  }

  function poundToKilogram() {
    let kilogram = inputToNumber * 0.454;
    kiloH2.textContent = kilogram.toFixed(1);
  }

  meterToFeet();
  feetToMeter();

  literToGallon();
  gallonToLiter();

  kilogramToPound();
  poundToKilogram();
});
