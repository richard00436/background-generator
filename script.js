var cssh3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var randomBtn = document.getElementById("randomBtn");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	cssh3.textContent = body.style.background + ";";
}

//(1. + 2.) Set color of first imput to value="#ffff00" in index.html. 
//			Call the function to display the intial CSS linear gradient property on page load.
setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//Bonus (random hex numbers from 
//https://stackoverflow.com/questions/5092808/how-do-i-randomly-generate-html-hex-color-codes-using-javascript)
function setBg() {
  color1.value = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  color2.value = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  setGradient();
}

randomBtn.addEventListener("click", setBg);
