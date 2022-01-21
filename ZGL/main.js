function search() {
	var txt = document.getElementById("search").value;
	var url = "http://google.com/search?q=";
	
	window.open(url + txt, "_self");
}

function playMusic() {
	var mus = document.getElementById("music");

	mus.currentTime = 22.5;
	mus.play();

	document.getElementById("play").style.display = "none";
}

window.addEventListener("DOMContentLoaded", () => {
	var mus = document.getElementById("music");

	mus.currentTime = 22.5;
	mus.play();
	
	setTimeout(() => {
		if(mus.paused) {
			alert("The music hasn't started properly. You can play it using the button at the top of the page !");
			document.getElementById("play").style.display = "block";
		}
	}, 300)
});