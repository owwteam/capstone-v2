AOS.init({
	once: true,
});

let lastScrollY = window.scrollY;
const navbar = document.getElementsByClassName("navbar")[0];
let lastShowScrollY = lastScrollY;

window.addEventListener("scroll", () => {
	const currentScrollY = window.scrollY;

	if (currentScrollY <= 100) {
		navbar.classList.remove("show", "hidden");
		lastScrollY = currentScrollY;
		lastShowScrollY = currentScrollY;
		return;
	}

	if (currentScrollY > lastScrollY) {
		navbar.classList.remove("show");
		navbar.classList.add("hidden");
		lastShowScrollY = currentScrollY;
	} else if (lastShowScrollY - currentScrollY > 50) {
		navbar.classList.remove("hidden");
		navbar.classList.add("show");
		lastShowScrollY = currentScrollY;
	}

	lastScrollY = currentScrollY;
});

const navToggle = document.querySelector(".navbar__toggle");
const navMenu = document.querySelector(".navbar__menu");

navToggle.addEventListener("click", () => {
	const isActive = navToggle.classList.toggle("active");
	navMenu.classList.toggle("active");
	navbar.classList.remove("show", "hidden");

	if (isActive) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "";
	}
});

// // Navbar Currennt Page
// const navLinks = document.querySelectorAll('.nav__link');
// const currentURL = window.location.href.replace(/\/$/, ''); 

// navLinks.forEach(link => {
//   link.classList.remove('active');
    
//   const linkURL = link.href.replace(/\/$/, '');

//   if (linkURL === currentURL) {
//     link.classList.add('active');
//   }
// });

document.addEventListener('DOMContentLoaded', function() {
  // Penandaan Tautan Aktif
  const navLinks = document.querySelectorAll('.nav__link');
  const currentURL = window.location.href.replace(/\/$/, '');

  navLinks.forEach(link => {
    link.classList.remove('active');
    const linkURL = link.href.replace(/\/$/, '');
    if (linkURL === currentURL) {
      link.classList.add('active');
    }
  });

  // Pencegahan Scroll ke Atas
  const hashLinks = document.querySelectorAll('a[href="#"]');
  hashLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
    });
  });
});
