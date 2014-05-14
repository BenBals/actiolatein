//How many questions are there? or Number of questions in that unit (ony changed by funtion go NOT manually)
window.n = 427;

//Number of Questions already answerd
window.questionN = 0;

//Lowest questionnumber of given unit
window.plusN = 1;

window.score = 0;
window.random = 0;
window.showSolution = 2000;
window.showRight = 400;
window.cookieExpire = 1497582762093;
window.currentStreak = 0;

function showLekSelect () {
	$("#dropdown").css("display","block");
}

function back () {
	$("#question"+window.random).css("display","none");
	window.questionN = 0;
	window.score = 0;
	window.random = 0;
	$("#go").css('color', '#fff');
	$("#stats").css("display","none");
	$("#navben").css("display","none");
	$("#question0").css("display","block");
}

function lekAlle () {go();}
function lek1 (){window.n = 63;window.plusN = 1; go();}
function lek3 (){window.n = 34;window.plusN = 63; go();}
function lek4 (){window.n = 18;window.plusN = 97; go();}
function lek5 (){window.n = 12;window.plusN = 116; go();}
function lek6 (){window.n = 38;window.plusN = 128; go();}
function lek7 (){window.n = 36;window.plusN = 146; go();}
function lek8 (){window.n = 36;window.plusN = 182; go();}
function lek9 (){window.n = 18;window.plusN = 218; go();}
function lek10 (){window.n = 43;window.plusN = 236; go();}
function lek11 (){window.n = 9;window.plusN = 279; go();}
function lek12 (){window.n = 30;window.plusN = 288; go();}
function lek13 (){window.n = 21;window.plusN = 318; go();}
function lek14 (){window.n = 27;window.plusN = 339; go();}
function lek15 (){window.n = 24;window.plusN = 366; go();}
function lek16 (){window.n = 20;window.plusN = 390; go();}
function lek17 (){window.n = 18;window.plusN = 410; go();}

function getCookies () {
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
	}
	window.longestStreak = cookieObj.longestStreak;
	window.high1 = cookieObj.high1;
	window.totalGames = cookieObj.totalGames;
	window.totalQuestions = cookieObj.totalQuestions;
	window.totalRight = cookieObj.totalRight;
	console.log("Streak: "+window.longestStreak);
	console.log("High1: "+window.high1);
}

function checkForCookies () {
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
	}
	if (cookieObj.hasOwnProperty("high1")) {
	}
	else {
		getCookies ();
		document.cookie = 'high1=0;expires='+window.now.toGMTString()+';path=/';
		getCookies ();
	}
	if (cookieObj.hasOwnProperty("longestStreak")) {
		
	}
	else {
		getCookies ();
		document.cookie = 'longestStreak=0;expires='+window.now.toGMTString()+';path=/';
		getCookies ();
	}
	if (cookieObj.hasOwnProperty("totalGames")) {
		
	}
	else {
		getCookies ();
		document.cookie = 'totalGames=0;expires='+window.now.toGMTString()+';path=/';
		getCookies ();
	}
	if (cookieObj.hasOwnProperty("totalQuestions")) {
		
	}
	else {
		getCookies ();
		document.cookie = 'totalQuestions=0;expires='+window.now.toGMTString()+';path=/';
		getCookies ();
	}
	if (cookieObj.hasOwnProperty("totalRight")) {
		
	}
	else {
		getCookies ();
		document.cookie = 'totalRight=0;expires='+window.now.toGMTString()+';path=/';
		getCookies ();
	}
}

function checkIfHigherScore () {
	$(".activated").css('color', '#fff');
	console.log("score: "+window.score);
	console.log("streak: "+window.currentStreak);
	getCookies();
	if (window.score > window.high1) {
		document.cookie = "high1="+window.score+";expires="+window.now.toGMTString()+";path=/";
		getCookies();
		$("#highHere").html(window.high1);
		$(".newHighscore").fadeOut('200');
		$(".newHighscore").fadeIn(200);
		setTimeout(function(){
			$(".newHighscore").fadeOut('200');
		}, 1500);
	}
	if (window.currentStreak > window.longestStreak) {
		document.cookie = "longestStreak="+window.currentStreak+";expires="+window.now.toGMTString()+";path=/";
		getCookies();
		$("#streakHere").html(window.longestStreak);
		$(".newBestStreak").fadeOut('200');
		$(".newBestStreak").fadeIn(200);
		setTimeout(function(){
			$(".newBestStreak").fadeOut('200');
		}, 1500);
	}
}

function showStats () {
	getCookies ();
	parseFloat(window.totalQuestions);
	parseFloat(window.totalRight);
	console.log("Total Right: "+window.totalRight);
	console.log("Total Questions: "+window.totalQuestions);
	window.rightPercentage = window.totalRight/window.totalQuestions;
	window.rightPercentage = window.rightPercentage*100;
	window.rightPercentage = Math.round(window.rightPercentage);
	if (window.totalQuestions === 0) {
		$("#rightPercentageWrapper").css("display","none");
		$("#rightPercentageFail").css("display","block");
	}
	console.log("Rightpercentage: "+window.rightPercentage);
	$("#rightPercentage").html(window.rightPercentage);
	$("#highscore").html(window.high1);
	$("#longestStreak").html(window.longestStreak);
	$("#totalGames").html(window.totalGames);
	$("#totalQuestions").html(window.totalQuestions);
	$("#stats").css("display","block");
	$("#question"+window.random).css("display","none");
}

function hideStats () {
	$("#stats").css("display","none");
	$("#question"+window.random).css("display","block");
}

function go () {
	$("#question0").css("display","none");
	window.random = Math.floor((Math.random()*window.n)+window.plusN);
	console.log("Frage: "+window.random);
	$("#navben").css("display","block");
	$("#question"+window.random).css("display","block");
	$ (".rightEx").css("color","#69BB9C");
	$ (".wrongEx").css("color","#e74c3c");
	checkForCookies();
	getCookies ();
	window.totalGames++;
	document.cookie = "totalGames="+window.totalGames+";expires="+window.now.toGMTString()+";path=/";
	getCookies ();
}

//When Check-Button ist pressed.
function checkAnswer () {
	window.questionN++;
	getCookies ();
	var input = $("#input"+window.random).val().toLowerCase();
	var answer = $("#answer"+window.random).html();
	if (input === answer) {
		if (showRight === 400) {
			$('.rightEx', $('#question'+window.random)).css("display","block");
			window.score++;
			window.currentStreak++;
			checkIfHigherScore ();
			window.totalRight++;
			setTimeout (function(){
				console.log("Richtig!");
				$ ("*").css("color","#000000");
				$ (".btn").css("color","#FFF");
				$ (".fa-cog").css("color","white");
				$ (".fa-tachometer").css("color","#FFF");
				$ (".fa-home").css("color","#fff");
				$ (".fa-bar-chart-o, .fa-arrow-circle-o-left").css("color","white");
				$ (".rightEx").css("color","#69BB9C");
				$ (".wrongEx").css("color","#e74c3c");
				$ (".rightEx").css("display","none");
				$ (".wrongEx").css("display","none");
				$('#question'+window.random).css("display","none");
				$("#input"+window.random).val("");
				window.random = Math.floor((Math.random()*window.n)+window.plusN);
				console.log("Frage: "+window.random);
				$("#question"+window.random).css("display","block");
				$("#input"+window.random).focus();
				$ (".answer").css("display","none");
				}
			,window.showRight);
		}
		else {
			window.score++;
			window.currentStreak++;
			checkIfHigherScore ();
			window.totalRight++;
			console.log("Richtig!");
			$ ("*").css("color","#000000");
			$ (".btn").css("color","#FFF");
			$ (".fa-arrow-circle-o-left").css('color', 'white');
			$ (".fa-cog").css("color","white");
			$ (".fa-tachometer").css("color","#FFF");
			$ (".fa-home").css("color","#fff");
			$ (".fa-bar-chart-o, .fa-arrow-circle-o-left").css("color","white");
			$ (".rightEx").css("color","#69BB9C");
			$ (".wrongEx").css("color","#e74c3c");
			$ (".rightEx").css("display","none");
			$ (".wrongEx").css("display","none");
			$('#question'+window.random).css("display","none");
			$("#input"+window.random).val("");
			window.random = Math.floor((Math.random()*window.n)+window.plusN);
			console.log("Frage: "+window.random);
			$("#question"+window.random).css("display","block");
			$("#input"+window.random).focus();
			$ (".answer").css("display","none");
		}
	}
	else {
		window.currentStreak = 0;
		checkIfHigherScore ();
		$("#answer"+window.random).css("display","block");
		console.log("Ausgeführt!!!!");
		$('.wrongEx', $('#question'+window.random)).css("display","block");
		$("#answer"+window.random).css("color","#69BB9C");
		setTimeout(function(){
			$ ("*").css("color","#000000");
			$ (".btn").css("color","#FFF");
			$ (".fa-cog").css("color","white");
			$ (".fa-tachometer").css("color","#FFF");
			$ (".fa-home").css("color","#fff");
			$ (".fa-bar-chart-o, .fa-arrow-circle-o-left").css("color","white");
			$ (".rightEx").css("color","#69BB9C");
			$ (".wrongEx").css("color","#e74c3c");
			$ (".rightEx").css("display","none");
			$ (".wrongEx").css("display","none");
			$('#question'+window.random).css("display","none");
			$("input"+window.random).val("");
			window.random = Math.floor((Math.random()*window.n)+window.plusN);
			console.log("Frage: "+window.random);
			$("#question"+window.random).css("display","block");
			$("#input"+window.random).focus();
			$ (".answer").css("display","none");
			}
		,window.showSolution);
	}
	window.totalQuestions++;
	console.log("tQ: "+window.totalQuestions);
	console.log("tR: "+window.totalRight);
	document.cookie = "totalQuestions="+window.totalQuestions+";expires="+window.now.toGMTString()+";path=/";
	document.cookie = "totalRight="+window.totalRight+";expires="+window.now.toGMTString()+";path=/";
	getCookies ();
}

//getCookies Points
function points () {
	alert("Du hast bis jetzt " + window.score + " von " + window.questionN + " Fragen richtig beantwortet.");
}

//New Game
function newG () {
	$("#question"+window.random).css("display","none");
	window.questionN = 0;
	window.score = 0;
	window.random = 0;
	$("#stats").css("display","none");
	go();
}

//home
function home () {
	window.location.href = "../";
}
window.settings = "hidden";
//getCookiesSettings
function showSettings () {
	if (window.settings === "hidden") {
		window.settings = "shown";
		$("#settings").fadeIn(400);
		$(".fa-cog").addClass("fa-spin");
		$(".showSettings").addClass('hideSettings');
		$("#question"+window.random).css("display","none");
	}
	else {
		hideSettings();
	}
}

//hideSettings
function hideSettings () {
	window.settings = "hidden";
	$("#settings").css("display","none");
	$(".hideSettings").removeClass('hideSettings');
	$(".fa-cog").removeClass("fa-spin");
	$("#question"+window.random).fadeIn(400);
}

//Lösung lange anzeigen
function longSolution () {window.showSolution=4000;}
//Lösung kurz anzeigen
function shortSolution() {window.showSolution=2000;}

//Richtig anzeigen
function showRight () {window.showRight=400;}
//Richtig nicht anzeigen
function dontShowRight () {window.showRight=0;}