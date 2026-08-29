const outer = document.getElementById("btn-outer")
const toggleBtn = document.getElementById("toggle-btn")
const body = document.getElementById("bg")

function toggle() {
	outer.classList.toggle("on")
	toggleBtn.classList.toggle("on")
	body.classList.toggle("on")
}