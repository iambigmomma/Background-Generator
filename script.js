var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("random");

// var randomColor1 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
// var randomColor2 = "#ffffff".replace(/f/g,function(){return (~~(Math.random()*16)).toString(16);});


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function setRandomGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ getRandomColor() 
	+ ", " 
	+ getRandomColor()  
	+ ")";

	css.textContent = body.style.background + ";";
	// console.log(getRandomColor());
	// console.log(getRandomColor());
}
//Initial background adjustment

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", setRandomGradient);