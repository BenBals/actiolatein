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

function showLekSelect () {
	$(".lekSelect").css("display","block");
}

function lekAlle () {go();}
function lek1 (){window.n = 63;window.plusN = 1; go(); console.log("rofl");}
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

function getHigh () {
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
		console.log(cookieObj);
	}
	window.high1 = cookieObj.high1;
	console.log("High1: "+window.high1);
}

function checkForHigh () {
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
		console.log(cookieObj);
	}
	if (cookieObj.hasOwnProperty("high1")) {
	}
	else {
		getHigh ();
		document.cookie = 'high1=0;expires='+window.now.toGMTString()+';path=/';
		getHigh ();
		window.location.reload();
	}
}

function checkIfHigherScore () {
	console.log("hey");
	console.log("score: "+window.score);
	getHigh();
	if (window.score > window.high1) {
		document.cookie = "high1="+window.score+";expires="+window.now.toGMTString()+";path=/";
		getHigh();
		alert("Neuer Highscore!!! Dein Highscore ist jetzt "+window.high1+"!");
	}
}

function go () {
	document.getElementById('question0').style.display = "none";
	window.random = Math.floor((Math.random()*window.n)+window.plusN);
	console.log("Frage: "+window.random);
	document.getElementById('navben').style.display="block";
	document.getElementById("question"+random).style.display="block";
	$ (".rightEx").css("color","#69BB9C");
	$ (".wrongEx").css("color","#e74c3c");
	checkForHigh();
	getHigh ();
	
}
//When Check-Button ist pressed.
function checkAnswer () {
	questionN++;
	var input = document.getElementById("input"+random).value.toLowerCase();
	var answer = document.getElementById("answer"+random).innerHTML;
	if (input == answer) {
		if (showRight == 400) {
			$('.rightEx', $('#question'+random)).css("display","block");
			window.score++;
			checkIfHigherScore ();
			setTimeout (function(){
				console.log("Richtig!");
				$ ("*").css("color","#000000");
				$ (".btn").css("color","#FFF");
				$ (".fa-cog").css("color","white");
				$ (".rightEx").css("color","#69BB9C");
				$ (".wrongEx").css("color","#e74c3c");
				$ (".rightEx").css("display","none");
				$ (".wrongEx").css("display","none");
   				document.getElementById('question'+random).style.display = "none";
   				document.getElementById("input"+random).value = '';
				window.random = Math.floor((Math.random()*n)+plusN);
				console.log("Frage: "+window.random);
				document.getElementById("question"+random).style.display="block";
				document.getElementById("input"+random).focus();
				$ (".answer").css("display","none");
				}
			,window.showRight);
		}
		else {
			window.score++;
			checkIfHigherScore ();
			console.log("Richtig!");
			$ ("*").css("color","#000000");
			$ (".btn").css("color","#FFF");
			$ (".fa-cog").css("color","white");
			$ (".rightEx").css("color","#69BB9C");
			$ (".wrongEx").css("color","#e74c3c");
			$ (".rightEx").css("display","none");
			$ (".wrongEx").css("display","none");
   			document.getElementById('question'+random).style.display = "none";
   			document.getElementById("input"+random).value = '';
			window.random = Math.floor((Math.random()*n)+plusN);
			console.log("Frage: "+window.random);
			document.getElementById("question"+random).style.display="block";
			document.getElementById("input"+random).focus();
			$ (".answer").css("display","none");
		}
	}
	else {
		checkIfHigherScore ();
		document.getElementById("answer"+window.random).style.display = "block";
		$('.wrongEx', $('#question'+window.random)).css("display","block");
		document.getElementById('answer'+window.random).style.color = "#69BB9C";
		setTimeout(function(){
    		$ ("*").css("color","#000000");
    		$ (".btn").css("color","#FFF");
    		$ (".fa-cog").css("color","white");
    		$ (".rightEx").css("color","#69BB9C");
			$ (".wrongEx").css("color","#e74c3c");
			$ (".rightEx").css("display","none");
			$ (".wrongEx").css("display","none");
   			document.getElementById('question'+window.random).style.display = "none";
   			document.getElementById("input"+window.random).value = '';
			window.random = Math.floor((Math.random()*window.n)+window.plusN);
			console.log("Frage: "+window.random);
			document.getElementById("question"+window.random).style.display="block";
			document.getElementById("input"+window.random).focus();
			$ (".answer").css("display","none");
			}
		,window.showSolution);
	}
}

//Show Points
function points () {
	alert("Du hast bis jetzt " + window.score + " von " + window.questionN + " Fragen richtig beantwortet.");
}

//New Game
function newG () {
	document.getElementById('question'+window.random).style.display="none";
	window.questionN = 0;
	window.score = 0;
	window.random = 0;
	go();
}

//home
function home () {
	window.location.href = "../index.html";
}

//showSettings
function showSettings () {
	$("#settings").css("display","block");
	$(".fa-cog").addClass("fa-spin");
	$("#question"+window.random).css("display","none");
}

//hideSettings
function hideSettings () {
	$("#settings").css("display","none");
	$(".fa-cog").removeClass("fa-spin");
	document.getElementById("question"+window.random).style.display="block";
}

//Lösung lange anzeigen
function longSolution () {window.showSolution=4000;}
//Lösung kurz anzeigen
function shortSolution() {window.showSolution=2000;}

//Richtig anzeigen
function showRight () {window.showRight=400;}
//Richtig nicht anzeigen
function dontShowRight () {window.showRight=0;}