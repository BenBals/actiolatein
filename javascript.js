function stammformenGoTo () {
	window.location.href = "stammformen/index.html";
}
function vokabelnGoTo () {
	window.location.href = "vokabeln/index.html";
}
function konjugationGoTo () {
	window.location.href = "konjugation/index.html";
}
function betaGoTo () {
	window.location.href = "http://benbals.github.io/actiolatein";
}
function dlapp () {
	window.open('https://s3-eu-west-1.amazonaws.com/stammformenapp/Actiolatein.apk', '_blank');
}
function home () {
	window.location.href = "/";
}
function help () {
	window.location.href = "help.html";
}
function deklinationGoTo () {
	window.location.href = "deklination/index.html";
}
function genitiveGoTo () {
	window.location.href = 'genitiv/index.html';
}
function dictGoTo () {
	window.location.href = 'dict/index.html';
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

function getCookiesMain () {
	window.now = new Date();
	window.time = window.now.getTime();
	window.expireTime = window.time + 100000*3600000;
	window.now.setTime(window.expireTime);
	window.tempExp = 'Wed, 31 Oct 2012 08:50:17 GMT';
	var rawCookie = document.cookie;
	var cookieArr = rawCookie.split(";");
	var cookieObj = {};
	for (var i = 0; i < cookieArr.length; i++) {
		var cookieKV = cookieArr[i];
		cookieKV = cookieKV.trim();
		var cookieKVArr = cookieKV.split("=");
		cookieObj[cookieKVArr[0]] = cookieKVArr[1];
		//console.log(cookieObj);
	}
	window.colorThink = cookieObj.color;
	window.color = window.colorThink.substring(1, window.colorThink.length-1);
}

function checkForCookiesMain () {
	window.now = new Date();
	window.time = window.now.getTime();
	window.expireTime = window.time + 100000*3600000;
	window.now.setTime(window.expireTime);
	window.tempExp = 'Wed, 31 Oct 2012 08:50:17 GMT';
	var rawCookie = document.cookie;
	var cookieArr = rawCookie.split(";");
	var cookieObj = {};
	for (var i = 0; i < cookieArr.length; i++) {
		var cookieKV = cookieArr[i];
		cookieKV = cookieKV.trim();
		var cookieKVArr = cookieKV.split("=");
		cookieObj[cookieKVArr[0]] = cookieKVArr[1];
		//console.log(cookieObj);
	}
	if (cookieObj.hasOwnProperty("color")) {
	}
	else {
		getCookiesMain ();
		document.cookie = 'color="schluepfer";expires='+window.now.toGMTString()+';path=/';
		getCookiesMain ();
	}
}

function changeColor () {
	getCookiesMain();
	window.whatToChangeShort = ".btn-primary";
	window.whatToChangeLong = ".btn-go, .btn-nav";
	console.log("Sheme: "+window.color);
	if (window.color === "redGreen") {
		window.color1 = "#780a00";
		window.color2 = "#8ada53";
	}
	if (window.color === "schluepfer") {
		window.color1 = "pink";
		window.color2 = "#48c9b0";
	}
	if (window.color === "alalotti") {
		window.color1 = "#23A2AC";
		window.color2 = "#842151";
	}
	if (window.color === "cristalBlue") {
		window.color1 = "#98a7e5";
		window.color2 = "#122678";
	}
	if (window.color === "eirik") {
		window.color1 = "#E1473E";
		window.color2 = "#397F80";
	}
	$(window.darkInLime).css('color', '#fff');
	if (window.color === "funkieLime") {
		window.color1 = "#C1FF2A";
		window.color2 = "#1E8015";
	}
	/* DOES NOT WORK
	$(window.whatToChangeLong).hover(function() {
		$( this ).css('background-color', '#000');
	}, function() {
		$( this ).css('background-color', window.color1);
	});
	$(window.whatToChangeShort).hover(function() {
		$( this ).css('background-color', '#fff');
	}, function() {
		$( this ).css('background-color', window.color2);
	});
	*/
	$(window.whatToChangeLong).css('background-color', window.color1);
	$(window.whatToChangeShort).css('background-color', window.color2);
}

function setColor (newColor) {
	document.cookie = 'color='+newColor+';expires='+window.now.toGMTString()+';path=/';
	getCookiesMain();
	changeColor();
	$(".activated").fadeOut('200');
	$(".activated").fadeIn(200);
	setTimeout(function(){
		$(".activated").fadeOut('200');
	}, 1500);
}

function showColorSetter () {
	$(".buttons").fadeOut('200');
	$(".colorSetter").fadeIn(200);
}

function hideColorSetter () {
	$(".buttons").fadeIn('200');
	$(".colorSetter").fadeOut(200);
	$(".activated").fadeOut('200');
}

$( ".redGreenTitle" ).click(function() {
	setColor("rredGreenn");
});

$( ".schluepferTitle" ).click(function() {
	setColor("sschluepferr");
});

$( ".alalottiTitle" ).click(function() {
	setColor("aalalottii");
});

$( ".cristalBlueTitle" ).click(function() {
	setColor("ccristalBluee");
});
$( ".funkieLimeTitle" ).click(function() {
	setColor("ffunkieLimee");
});
$( ".eirikTitle" ).click(function() {
	setColor("eeirikk");
});

window.ckURL = document.URL;
window.splitCkURL = window.ckURL.split("?");
window.woCkURL = window.splitCkURL[0];


if (document.URL === "http://benbals.github.io/actiolatein/index.html" || document.URL === "http://benbals.github.io/actiolatein/" || window.woCkURL === "http://mbp.local:5757/" || window.woCkURL === "http://mbp.local:5757/index.html") {
	$(".beta").css("display","none");
	$(".ansage").css("display","none");
}

$(function() {
    FastClick.attach(document.body);
});

//GOOGLE ANALYTICS
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-49782176-1', 'benbals.github.io');
  ga('require', 'displayfeatures');
  ga('send', 'pageview');


$( document ).ready(function() {
    getCookiesMain();
    checkForCookiesMain();
    changeColor();
});