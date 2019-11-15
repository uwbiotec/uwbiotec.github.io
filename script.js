window.onload = function() {
	showHideBanner();
	setContent();
};

window.onscroll = function() {showHideBanner()};

window.onresize = function(){setContent();};

var stickbanner_func = function stickBanner() {
		var sticky = document.getElementById("topbanner").offsetTop;
		
		if(screen.width>700){	

			if (window.pageYOffset > sticky) {
			  	
			    document.getElementById("topbanner").classList.add("sticky");
			  } else {
			    document.getElementById("topbanner").classList.remove("sticky");
			  }
		} else{
			document.getElementById("topbanner").classList.add("sticky");
		}
}


function showHideBanner(){
	var abouttop = document.getElementById("about").offsetTop;
	
	if (screen.width>700){

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
	} else{

		if (window.pageYOffset >= window.innerHeight-150){
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
}

function setContent(){
	if (screen.width < 700){
		document.getElementById("Registration").textContent = "Registration";
		document.getElementById("PitchComp").textContent = "Pitch Competition";
		document.getElementById("Lunch").textContent = "Lunch";
		document.getElementById("Workshops").textContent = "Industry Workshops";
		document.getElementById("Breakouts").textContent = "Research Breakouts";
		document.getElementById("Panel").textContent = "Academic Panel";
	}
	else{
		document.getElementById("Registration").textContent = "Registration";
		document.getElementById("PitchComp").textContent = "Capstone Pitch Competition";
		document.getElementById("Lunch").textContent = "Lunch Session";
		document.getElementById("Workshops").textContent = "Industry Innovation Workshops";
		document.getElementById("Breakouts").textContent = "Breakout Sessions";
		document.getElementById("Panel").textContent = "Clinical Technology Panel";;
	}

	if (screen.width < 1000){
		document.getElementById("baylisTitle").textContent = "Beyond R&D";
		document.getElementById("relayTitle").textContent = "The Cathedral Model";
		document.getElementById("intelliTitle").textContent = "Hurdles in the Market";
	} else{
		document.getElementById("baylisTitle").textContent = "Going Beyond R&D in Biotech";
		document.getElementById("relayTitle").textContent = "Applying the 'Cathedral Model' to Medtech Ventures";
		document.getElementById("intelliTitle").textContent = "Jumping Hurdles in the Medtech Market";
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

	if(event.target.matches('.keynote-arrow-wrapper')){
		var keynoteBio = document.getElementsByClassName("keynote-bio-wrapper");
		var i;
		
		for(i=0; i<keynoteBio.length; i++){
			if (keynoteBio[i].classList.contains('open')){
				keynoteBio[i].classList.remove('open');
			}
		}
	}
}

function menuToggle(){

	var topbar = document.getElementById("topline");
	var midbar = document.getElementById("middleline");
	var botbar = document.getElementById("bottomline");
	var navtabs = document.getElementById("navtabs");
	var banner = document.getElementById("topbanner");
	var logo = document.getElementById("bannerlogo");

	if (topbar.classList.contains("rotate45") && botbar.classList.contains("rotate135")
		&& midbar.style.display=="none" && navtabs.style.display=== "flex"){

		topbar.classList.remove("rotate45");
		botbar.classList.remove("rotate135");
		midbar.style.display="block";
		navtabs.style.display="none";

		banner.style.height = "60px";
		
		if (window.pageYOffset >= window.innerHeight-150){
			logo.classList.add("fade");
		}
		
		if (window.pageYOffset <= window.innerHeight-150){
			banner.classList.remove("bannerbackground");
			banner.classList.add("bannerbackground-out");
		}

		document.body.classList.remove("noScroll");

	} else{
		topbar.classList.add("rotate45");
		botbar.classList.add("rotate135");
		midbar.style.display = "none";
		navtabs.style.display = "flex";
		banner.style.height = "100vh";
		banner.classList.add("bannerbackground");
		logo.classList.remove("fade");
		document.body.classList.add("noScroll");
	}

}

function navigate(a){
	var topbar = document.getElementById("topline");
	var midbar = document.getElementById("middleline");
	var botbar = document.getElementById("bottomline");
	var navtabs = document.getElementById("navtabs");
	var banner = document.getElementById("topbanner");

	if (screen.width <= 700){
		topbar.classList.remove("rotate45");
		botbar.classList.remove("rotate135");
		midbar.style.display="block";
		navtabs.style.display="none";
		banner.style.height = "60px";
		document.body.classList.remove("noScroll");
	}

	
}

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'scrollTop':  $(target).offset().top
        }, 750, 'swing', function () {
            window.location.hash = target;
        });
    });
});