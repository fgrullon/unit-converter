/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.querySelector("#convert-btn");
const inputEl = document.querySelector("#convert-input");
const lengthEl = document.querySelector("#length-p");
const volumeEl = document.querySelector("#volume-p");
const massEl = document.querySelector("#mass-p");

convertBtn.addEventListener("click", function () {
  const value = Number(inputEl.value);
  formatLength(value);
  formatVolume(value);
  formatMass(value);
});

function formatLength(value) {
  const feet = (value * 3.281).toFixed(3);
  const meters = (value * 0.3048).toFixed(3);
  lengthEl.textContent = `${value} meters = ${feet} feet | ${value} feet = ${meters} meters`;
}

function formatVolume(value) {
  const gallons = (value * 0.264).toFixed(3);
  const liters = (value * 3.7854).toFixed(3);
  volumeEl.textContent = `${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters`;
}

function formatMass(value) {
  const pounds = (value * 2.2046).toFixed(3);
  const kilos = (value * 0.4536).toFixed(3);
  massEl.textContent = `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilos} kilos`;
}
