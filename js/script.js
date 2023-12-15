// SMOOTH ANIMATIONS
AOS.init({
	startEvent: 'DOMContentLoaded',
});

document.addEventListener('DOMContentLoaded', () => {
	// SET CURRENT YEAR FOR FOOTER
	const currentYear = new Date().getFullYear();
	const yearSpan = document.getElementById('currentYear');

	yearSpan.textContent = currentYear;

	// MOBILE NAVIGATION
	const body = document.querySelector('body');
	const menuBtn = document.querySelector('.nav-burger');
	const burgerIcon = document.querySelector('.nav-burger-icon');
	const navLinks = document.querySelector('.nav-links');
	const navBtn = document.querySelector('#navBtn');

	menuBtn.addEventListener('click', () => {
		body.classList.toggle('no-scroll');
		burgerIcon.classList.toggle('active');
		navLinks.classList.toggle('show');
		navBtn.classList.toggle('hide');
	});

	// AUTHENTICATION FORM PASSWORD TOGGLES
	const toggleBtn = document.querySelector('#toggleBtn');
	const toggleBtnRepeat = document.querySelector('#toggleBtnRepeat');

	const passwordInput = document.querySelector('#password');
	const passwordInputRepeat = document.querySelector('#passwordRepeat');

	const showIcon = document.querySelector('.show-icon');
	const hideIcon = document.querySelector('.hide-icon');

	const showIconRepeat = document.querySelector('.show-icon-repeat');
	const hideIconRepeat = document.querySelector('.hide-icon-repeat');

	toggleBtn.addEventListener('click', () => {
		showIcon.classList.toggle('active');
		hideIcon.classList.toggle('active');

		if (passwordInput.type === 'password') {
			passwordInput.type = 'text';
		} else {
			passwordInput.type = 'password';
		}
	});

	toggleBtnRepeat.addEventListener('click', () => {
		showIconRepeat.classList.toggle('active');
		hideIconRepeat.classList.toggle('active');

		if (passwordInputRepeat.type === 'password') {
			passwordInputRepeat.type = 'text';
		} else {
			passwordInputRepeat.type = 'password';
		}
	});
});

// HERO SWIPER
const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	speed: 1500,
	effect: 'fade',
	autoplay: {
		delay: 3000,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
