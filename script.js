window.onload = function() {
	showHideBanner();
	fadeLogo();
};

window.onscroll = function() {
	showHideBanner()
	// statsAnimate();
};

function fadeLogo(){
	document.getElementById("landingLogo").classList.add("fade");
}

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
			document.getElementById("navtabs").classList.add("fade");
			stickbanner_func();
		}
		else{
			document.getElementById("bannerlogo").classList.remove("fade");
			document.getElementById("topbanner").classList.remove("bannerbackground");
			document.getElementById("topbanner").classList.add("bannerbackground-out");
			document.getElementById("navtabs").classList.remove("fade");
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

/*Img slides*/

if(screen.width > 325){
	$("#imgs-wrapper1 > div:gt(0)").hide();

	setInterval(function(){
		$('#imgs-wrapper1 > div:first')
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#imgs-wrapper1')
	}, 6000);

	$("#imgs-wrapper2 > div:gt(0)").hide();

	setInterval(function(){
		$('#imgs-wrapper2 > div:first')
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#imgs-wrapper2')
	}, 10000);

	$("#imgs-wrapper3 > div:gt(0)").hide();

	setInterval(function(){
		$('#imgs-wrapper3 > div:first')
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#imgs-wrapper3')
	}, 8000);

}

/*Bar graph*/

var bar_func = function (){
	$('.bar').each(function(i){  
	    var $bar = $(this);
	    setTimeout(function(){
	      $bar.css('width', $bar.attr('data-percent'));      
	    }, i*100);
	  });
}

/*Counter*/
var counter_func = function(){ $('.count').each(function () {
	$(this).prop('Counter',0).animate({
		Counter: $(this).text()
	}, {
		duration: 3000,
		easing: 'swing',
		step: function (now) {
		$(this).text(Math.ceil(now));
		
		}
	});
});
}

// On scroll stats functions

var fired = false;

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = document.getElementById('schedule').offsetTop;             // set to whatever you want it to be
if(fired==false){
    if(y_scroll_pos > scroll_pos_test) {
        console.log("swag");
 		counter_func();
		bar_func();
		fired = true
    }
}
});

/*Speaker Bios*/

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