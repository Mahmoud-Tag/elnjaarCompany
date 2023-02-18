/** @format */

//show menu when click on bars icon
let divBar = document.querySelector('.bar-icons');
let menu = document.querySelector('.menu');
function mobileMenu() {
	if (menu.style.display === 'none') {
		menu.style.display = 'block';
	} else {
		menu.style.display = 'none';
	}
}
window.onload = divBar.addEventListener('click', mobileMenu);

//set Interval for spans to count to specific number when reach their section
let spans = document.querySelectorAll('.num');
let section = document.querySelector('.s5');
let started = false;
window.onscroll = function () {
	if (window.scrollY >= section.offsetTop) {
		if (!started) {
			spans.forEach((span) => startCount(span));
		}
		started = true;
	}

	function startCount(e) {
		let goal = e.dataset.goal;
		let count = setInterval(() => {
			e.textContent++;
			if (e.textContent == goal) {
				clearInterval(count);
			}
		}, 1000);
	}
};

//display the div then clicke it to Move up
let toTop = document.querySelector('.to-top');
let sec = document.querySelector('.sec6');
window.onscroll = function () {
	if (window.scrollY >= sec.offsetTop) {
		toTop.classList.add('show-to-top');
	} else {
		toTop.classList.remove('show-to-top');
	}
};
