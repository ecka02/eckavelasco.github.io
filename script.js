function openModal(e) {
	var box = document.getElementById("modal-box");
	var content = document.getElementById("modal-content");

	content.innerHTML = "<img id='viewer' src='"+e.src+"'>";
	box.style.display = "block";
	// body...
}

function closeModal() {
	document.getElementById("modal-box").style.display = "none";
	// body...
}