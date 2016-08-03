	var link = document.querySelector(".write-us");
var popup = document.querySelector(".write-us-window");
var cancel = document.querySelector(".write-us-cancel");
var close = document.querySelector(".close-btn");

link.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("write-us-window-show");
});

cancel.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("write-us-window-show");
});

close.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("write-us-window-show");
});