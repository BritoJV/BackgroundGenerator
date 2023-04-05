var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
};

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function randomPrimaryColor(){
	var value = Math.floor(Math.random()*256);
	var hexValue = value.toString(16);
	if (value<16){
		return "0"+hexValue;
	}
	return value.toString(16);
};

function randomBackground(){
	var newColor1 = ("#"+randomPrimaryColor()+randomPrimaryColor()+randomPrimaryColor());
	color1.value = newColor1;
	var newColor2 = ("#"+randomPrimaryColor()+randomPrimaryColor()+randomPrimaryColor());
	color2.value = newColor2;
	setGradient()
};

button.addEventListener("click",randomBackground);

window.onload = init();

function init() {
	setGradient();
	css.textContent = body.style.background + ";";
};