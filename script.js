/*window.onscroll = function() {showHideBanner()};
window.onload= function() {showHideBanner()};

function showHideBanner(){
	console.log("function fired")
	if (document.body.scrollTop > 893 || document.documentElement.scrollTop > 893){
		document.getElementById("bannerlogo").style.display = "block"
		document.getElementById("topbanner").classList.add("bannerbackground");
		document.getElementById("topbanner").classList.remove("landingbackground");
	}
	else{
		document.getElementById("bannerlogo").style.display = "none";
		document.getElementById("topbanner").classList.add("landingbackground");
		document.getElementById("topbanner").classList.remove("bannerbackground");
	}
}

window.onscroll = function() {stickBanner()};

		// Get the offset position of the navbar
		var sticky = document.getElementById("topbanner").offsetTop[0];
		function stickBanner() {

		  if (window.pageYOffset > sticky) {
		  	console.log("fired");
		    document.getElementById("topbanner").classList.add("sticky");
		  } else {
		    document.getElementById("topbanner").classList.remove("sticky");
		  }
}*/
window.onload = function() {
	showHideBanner();
	setContent();
};

window.onscroll = function() {showHideBanner()};

window.onresize = function(){setContent();};

var stickbanner_func = function stickBanner() {
		var sticky = document.getElementById("topbanner").offsetTop;
		if (window.pageYOffset > sticky) {
		  	//console.log("fired");
		    document.getElementById("topbanner").classList.add("sticky");
		  } else {
		    document.getElementById("topbanner").classList.remove("sticky");
		  }
}


function showHideBanner(){
	var abouttop = document.getElementById("about").offsetTop;
	
	//console.log("function fired")
	if (window.pageYOffset >= abouttop-100){
		document.getElementById("bannerlogo").style.display = "block";
		document.getElementById("topbanner").classList.add("bannerbackground");
		stickbanner_func();
	}
	else{
		document.getElementById("bannerlogo").style.display = "none";
		document.getElementById("topbanner").classList.remove("bannerbackground");
		stickbanner_func();
	}
}

function setContent(){
	if (screen.width < 700){
		document.getElementById("Registration").textContent = "Registration";
		document.getElementById("PitchComp").textContent = "Pitch Competition";
		document.getElementById("Lunch").textContent = "Lunch | Posters & Booths";
		document.getElementById("Workshops").textContent = "Industry Workshops";
		document.getElementById("Breakouts").textContent = "Research Breakouts";
		document.getElementById("Panel").textContent = "Academic Panel";
	}
	else{
		document.getElementById("Registration").textContent = "Registration & Refreshments";
		document.getElementById("PitchComp").textContent = "Medical Innovation Pitch Competition";
		document.getElementById("Lunch").textContent = "Lunch | Poster Session & Company Booths";
		document.getElementById("Workshops").textContent = "Industry Innovation Workshops";
		document.getElementById("Breakouts").textContent = "Research Breakout Sessions";
		document.getElementById("Panel").textContent = "Technology Solutions in Healthcare Panel";;
	}

}