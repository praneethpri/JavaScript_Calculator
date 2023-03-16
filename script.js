const display = document.getElementById("display")
const equals = document.getElementById("equal-sign")
const allClear = document.getElementById("all-clear")
const backspace = document.getElementById("backspace")

const addition = document.getElementById("add")
const subtraction = document.getElementById("subtract")
const multiplication = document.getElementById("multiply")
const division = document.getElementById("divide")

const numberOne = document.getElementById("number1")
const numberTwo = document.getElementById("number2")
const numberThree = document.getElementById("number3")
const numberFour = document.getElementById("number4")
const numberFive = document.getElementById("number5")
const numberSix = document.getElementById("number6")
const numberSeven = document.getElementById("number7")
const numberEight = document.getElementById("number8")
const numberNine = document.getElementById("number9")
const numberZero = document.getElementById("number0")

let value = []

numberOne.addEventListener("click", function() {
	display.innerHTML += "1"
	value.push = 1
})
numberTwo.addEventListener("click", function() {
	display.innerHTML += "2"
})
numberThree.addEventListener("click", function() {
	display.innerHTML += "3"
})
numberFour.addEventListener("click", function() {
	display.innerHTML += "4"
})
numberFive.addEventListener("click", function() {
	display.innerHTML += "5"
})
numberSix.addEventListener("click", function() {
	display.innerHTML += "6"
})
numberSeven.addEventListener("click", function() {
	display.innerHTML += "7"
})
numberEight.addEventListener("click", function() {
	display.innerHTML += "8"
})
numberNine.addEventListener("click", function() {
	display.innerHTML += "9"
})
numberZero.addEventListener("click", function() {
	display.innerHTML += "0"
})

