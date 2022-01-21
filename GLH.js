function ld(page) {
    window.open("./" + page + "/index.html", "_self")
}

window.addEventListener("DOMContentLoaded", () => {
	var mus = document.getElementById("music");

	mus.currentTime = 24.2;
	mus.play();
});