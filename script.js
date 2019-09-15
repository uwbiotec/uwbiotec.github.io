window.onload = function() {
	showHideBanner();
	setContent();
};

window.onscroll = function() {showHideBanner()};

window.onresize = function(){setContent();};

var stickbanner_func = function stickBanner() {
		var sticky = document.getElementById("topbanner").offsetTop;
		if (window.pageYOffset > sticky) {
		  	
		    document.getElementById("topbanner").classList.add("sticky");
		  } else {
		    document.getElementById("topbanner").classList.remove("sticky");
		  }
}


function showHideBanner(){
	var abouttop = document.getElementById("about").offsetTop;
	
	if (window.pageYOffset >= abouttop-100){
		document.getElementById("bannerlogo").classList.add("fade");
		document.getElementById("topbanner").classList.add("bannerbackground");
		stickbanner_func();
	}
	else{
		document.getElementById("bannerlogo").classList.remove("fade");
		document.getElementById("topbanner").classList.remove("bannerbackground");
		document.getElementById("topbanner").classList.add("bannerbackground-out");
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