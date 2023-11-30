// script.js
document.addEventListener("mousemove", (e) => {
	const name = document.getElementById("tawan_name");
	const { clientX, clientY } = e;

	const centerX = window.innerWidth / 2;
	const centerY = window.innerHeight / 2;

	const deltaX = clientX - centerX;
	const deltaY = clientY - centerY;

	const rotateY = (deltaX / centerX) * 60; // adjust for sensitivity
	const rotateX = (-deltaY / centerY) * 60; // adjust for sensitivity

	name.style.transform = `rotate3d(${rotateX}, ${rotateY}, 0, ${Math.sqrt(
		rotateX * rotateX + rotateY * rotateY,
	)}deg)`;
});
