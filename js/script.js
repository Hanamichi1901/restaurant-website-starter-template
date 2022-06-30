

window.addEventListener("load", function(){
	// Page Loader
	document.querySelector(".page-loader").classList.add("fade-out");
	setTimeout(function(){
		document.querySelector(".page-loader").style.display="none";
	},600);
	// Animation On Scroll
	AOS.init();
})

// Audio
var audio = document.getElementById("audio");
var count = 0;

function playpause(){
	if(count == 0){
		count = 1;
		audio.play();
	}
	else {
		count = 0;
		audio.pause();
	}
}
const buttonaudio = document.querySelector(".button-audio");
buttonaudio.addEventListener("click", function(e){
	if(e.target.classList.contains("button-audio")){
		buttonaudio.querySelector("i").classList.remove("fa-pause");
		buttonaudio.querySelector("i").classList.add("fa-play");
	}
	else{
		buttonaudio.querySelector("i").classList.remove("fa-play");
		buttonaudio.querySelector("i").classList.add("fa-pause");
	}
})	

// Go on top
document.addEventListener("scroll", handleScroll);
var scrollToTopBtn = document.querySelector(".button-ontop");
function handleScroll() {
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}

// Toggle Navbar
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
	navToggler.classList.toggle("active");
	document.querySelector(".nav").classList.toggle("open");
}

// Close nav when clicking on a nav item
document.addEventListener("click", function(e){
	if(e.target.closest(".nav-item")){
		toggleNav();
	}
})

// Sticky Header
window.addEventListener("scroll",function(){
	if(this.pageYOffset > 60){
		document.querySelector(".header").classList.add("sticky");
	}
	else {
		document.querySelector(".header").classList.remove("sticky");
	}
})

// Menu Tabs
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e){
	if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
		const target = e.target.getAttribute("data-target");
		menuTabs.querySelector(".active").classList.remove("active");
		e.target.classList.add("active");
		const menuSection = document.querySelector(".menu-section");
		menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
		menuSection.querySelector(target).classList.add("active");
		// Animation On Scroll
		AOS.init();
	}
})
