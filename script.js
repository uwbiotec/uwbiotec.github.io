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

function showBio(div){
	var bios = document.getElementsByClassName("speaker-bio-wrapper");
	var openArrow = document.getElementsByClassName("arrow-wrapper-open");
	var i;

	for(i=0; i<bios.length; i++){
		bios[i].classList.remove('open')
		openArrow[i].classList.remove('hide');
	}

	div.nextSibling.nextSibling.classList.toggle("open");
	div.childNodes[3].childNodes[5].classList.toggle("hide");
	
}

function showBio1(div){
	var biosCol1 = document.getElementsByClassName("speaker-bio-wrapper-col1");
	var i;

	for(i=0; i<biosCol1.length; i++){
		biosCol1[i].classList.remove('open')
	}

	div.nextSibling.nextSibling.classList.toggle("open");
}

function showBio2(div){
	var biosCol2 = document.getElementsByClassName("speaker-bio-wrapper-col2");
	var i;

	for(i=0; i<biosCol2.length; i++){
		biosCol2[i].classList.remove('open')
	}

	div.nextSibling.nextSibling.classList.toggle("open");
}

window.onclick = function(event){

	if(!event.target.matches('.speaker-wrapper')){
		var bios = document.getElementsByClassName("speaker-bio-wrapper");
		var openArrow = document.getElementsByClassName("arrow-wrapper-open");
		var i;
		for(i=0; i<bios.length; i++){
			if (bios[i].classList.contains('open') && openArrow[i].classList.contains('hide')){
				bios[i].classList.remove('open');
				openArrow[i].classList.remove('hide');
			}
		}
	}

	if(event.target.matches('.arrow-wrapper-col1')){
		var biosCol1 = document.getElementsByClassName("speaker-bio-wrapper-col1");
		var i;
		
		for(i=0; i<biosCol1.length; i++){
			if (biosCol1[i].classList.contains('open')){
				biosCol1[i].classList.remove('open');
			}
		}
	}

	if(event.target.matches('.arrow-wrapper-col2')){
		var biosCol2 = document.getElementsByClassName("speaker-bio-wrapper-col2"); 
		var i;

		for(i=0; i<biosCol2.length; i++){
			if (biosCol2[i].classList.contains('open')){
				biosCol2[i].classList.remove('open');
			}
		}
	}


}