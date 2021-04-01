const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navBar = document.querySelector(".nav");

const navLeft = menu.getBoundingClientRect().left;

navOpen.addEventListener("click",()=>{
	if (navLeft < 0) {
	menu.classList.add("show");
	document.body.classList.add("show");
	navBar.classList.add("show");
	
	}
	

});

navClose.addEventListener("click",() => {
	if (navLeft < 0) {
	menu.classList.remove("show");
	document.body.classList.remove("show");
	navBar.classList.remove("show");
	
	}
	

});

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, y: 20 });
gsap.from(".hero-img", { opacity: 0, duration: 1, delay: 1.5, y: 200 });
gsap.from(".hero-content h2", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".hero-content p", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".hero-content a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });