window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	
};

// The listener function here
const theGreen = document.getElementById("theGreen");
theGreen.addEventListener('click' , ()=>{
	alert("Whohooo!!!")
});