var btn = document.getElementById("hamburger-button");
var menuMobile = document.getElementById("menu-mobile");
var socialIcons = document.getElementById("social-icons");

btn.addEventListener("click", function(){
	menuMobile.classList.toggle("show"); // dodajemy klasę
	socialIcons.classList.toggle("show");
})

// dodać matchMedia, żeby schować mobilne 'menu': 

var desktop = window.matchMedia("screen and (min-width: 770px)");

desktop.addListener( function(desktop) {
	if (desktop.matches) {
		menuMobile.classList.remove("show");
		socialIcons.classList.remove("show");
	} 
});
