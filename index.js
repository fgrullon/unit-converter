/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.querySelector("#convert-btn")
const inputEl = document.querySelector("#convert-input")
const lengthEl = document.querySelector("#length-p")
const volumeEl = document.querySelector("#volume-p")
const massEl = document.querySelector("#mass-p")

convertBtn.addEventListener("click", function(){
    const value = Number(inputEl.value)
    formatLength(value)
    formatVolume(value)
    formatMass(value)
})

function formatLength(value){
    lengthEl.textContent = `${value} meters = ${value * 3.281} feet | ${value} feet = ${value * 0.3048} meters`
}

function formatVolume(value){
    volumeEl.textContent = `${value} liters = ${value * 0.264} gallons | ${value} gallons = ${value * 3.7854} liters`
}

function formatMass(value){
    massEl.textContent = `${value} kilos = ${value * 2.2046} pounds | ${value} pounds = ${value * 0.4536} kilos`
}

