// Assigning variables
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
let randomcolors = ["#2ecc71", "#3498db", "#f1c40f", "#e74c3c", "#2c3e50", "#9b59b6", "#ecf0f1", "#c0392b", "#d35400", "#7f8c8d", "#bdc3c7", "#2980b9", "#f1c40f", "#1abc9c", "#34495ec"];
let randomcolors2 = ["#4bcffa", "#ef5777", "#575fcf", "#0be881", "#ffdd59", "#ff3f34", "#485460", "#00d8d6", "#d2dae2", "#808e9b", "#ff5e57", "#ffd32a", "#1e272e", "#3c40c6", "#ffa801"];

let btn = document.getElementById("btn");

//Onload, calls function to display original gradient colors
setGradient();

// Creating functions
// First function sets background color based on color picker
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}
// This function chooses random colors from the 'colors' array
function randomGradient() {
	var random = Math.floor(Math.random() * randomcolors.length);
	var color1 = randomcolors[random];
	var rand = Math.floor(Math.random() * randomcolors2.length);
	var color2 = randomcolors2[rand];

	body.style.background = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
	css.textContent = body.style.background + ";";
}

// Add event listeners
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
btn.addEventListener("click", randomGradient)
