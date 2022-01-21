function search() {
	var txt = document.getElementById("search").value;
	var url = "http://google.com/search?q=";
	
	window.open(url + txt, "_self");
}

window.addEventListener("DOMContentLoaded", () => {
	var mus = document.getElementById("music");

	mus.currentTime = 22.5;
	mus.play();
});