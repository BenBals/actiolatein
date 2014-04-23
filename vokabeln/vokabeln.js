//How many questions are there? or Number of questions in that unit (ony changed by funtion go NOT manually)
window.n = 37;
//Lowest questionnumber of given unit
window.plusN = 1;
//Number of Questions already answerd
window.questionN = 0;

window.random = 0;
window.score = 0;
window.upTo3 = 0;

//home
function home() {
	window.location.href = "../../index.html";
}

//Back
function backVokSelect () {
	window.location.href = "../index.html";
}

function go (newN) {
	$("#questionScreen").css("display","block");
	$(".back").css("display","inline");
	$(".showPoints").css("display","inline");
	$("#go").css("display","none");
	window.n = newN;
	newQ();
}

function newQ () {
	console.log("NewQ up and running");
	$(".input-sm").css("border-color","#bdc3c7");
	$(".rightEx").css("display","none");
	$(".wrongEx").css("display","none");
	$(".answer").css("display","none");
	window.i1 = $("#input1").val("");
	window.i2 = $("#input2").val("");
	window.i3 = $("#input3").val("");
	window.random = Math.floor((Math.random()*window.n)+window.plusN);
	console.log("Random: "+window.random);
	window.q = $("#q"+window.random).html().toLowerCase();
	window.a1 = $("#a1_"+window.random).html().toLowerCase();
	window.a2 = $("#a2_"+window.random).html().toLowerCase();
	window.a3 = $("#a3_"+window.random).html().toLowerCase();
	window.a1B = $("#a1_"+window.random).html();
	window.a2B = $("#a2_"+window.random).html();
	window.a3B = $("#a3_"+window.random).html();
	window.i2Avaible = "yes";
	window.i3Avaible = "yes";
	$("#input1").css("display","inline");
	$("#input2").css("display","inline");
	$("#input3").css("display","inline");
	if (window.a1 === "") {$("#input1").css("display","none");}
	if (window.a2 === "") {$("#input2").css("display","none");window.i2Avaible = "no";}
	if (window.a3 === "") {$("#input3").css("display","none");window.i3Avaible = "no";}
	$("#questionHere").html(window.q);
	$("#a1_screen").html(window.a1B);
	$("#a2_screen").html(window.a2B);
	$("#a3_screen").html(window.a3B);
}

function check () {
	window.i1 = $("#input1").val().toLowerCase();
	window.i2 = $("#input2").val().toLowerCase();
	window.i3 = $("#input3").val().toLowerCase();

	if (window.i1 === "") {alert("Du musst alle Felder ausfüllen!");}
	else {
	if (window.i2 === "" && window.i2Avaible == "yes") {alert("Du musst alle Felder ausfüllen!");}
	else {
	if (window.i3 === "" && window.i3Avaible == "yes") {alert("Du musst alle Felder ausfüllen!");}
	else {
	
	if (window.i1 == window.a1 || window.i1 == window.a2 || window.i1 == window.a3) {
		if (window.i1Avaible == "yes") {window.score++;}
		window.upTo3++;
		$("#input1").css("border-color","#69BB9C");
	}
	else {
		$("#input3").css("border-color","#CB4C39");
	}
	if (window.i2 == window.a1 || window.i2 == window.a2 || window.i2 == window.a3) {
		if (window.i2Avaible == "yes") {window.score++;}
		window.upTo3++;
		$("#input2").css("border-color","#69BB9C");
	}
	else {
		$("#input3").css("border-color","#CB4C39");
	}
	if (window.i3 == window.a1 || window.i3 == window.a2 || window.i3 == window.a3) {
		if (window.i3Avaible == "yes") {window.score++;}
		window.upTo3++;
		$("#input3").css("border-color","#69BB9C");
	}
	else {
		$("#input3").css("border-color","#CB4C39");
	}
	
	if (window.i1Avaible == "yes") {window.questionN++;}
	if (window.i2Avaible == "yes") {window.questionN++;}
	if (window.i3Avaible == "yes") {window.questionN++;}
	
	if (window.upTo3 == 3) {
		$(".rightEx").css("display","block");
		window.setTimeout(function(){
			newQ();
		},400);
	}
	else {
		$(".wrongEx").css("display","block");
		$(".answer").css("display","block");
		window.setTimeout(function(){
			newQ();
		},3500);
	}
	
	window.upTo3 = 0;
	
	//closing else thingees that check for empty input
	}
	}
	}
}

//ShowPoints
function points () {
	alert("Du hast " + window.score + " Punkte von " + window.questionN + " möglichen.");
}