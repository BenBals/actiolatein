//How many questions are there? or Number of questions in that unit (ony changed by funtion go NOT manually)
window.n = 35;
//Lowest questionnumber of given unit
window.plusN = 1;
//Number of Questions already answerd
window.questionN = 0;

window.upTo3 = 0;
window.upTo2 = 0;
window.random = 0;
window.score = 0;
 
function go () {
	$("#question0").css("display","none");
	window.random = Math.floor((Math.random()*window.n)+window.plusN);
	$("#question"+window.random).css("display","block");
	$(".block").css("display","inline");
	$(".answer").css("display","none");
}

//home
function home() {
	window.location.href = "../../index.html";
}

//Back
function backVokSelect () {
	$(".back").css("display","none");
	$(".answer").css("display","none");
	$("#question0").css("display","block");
	$("#question"+window.random).css("display","none");
	window.questionN = 0;
	window.random = 0;
	window.score = 0;
	window.upTo2 = 0;
}

//check 1 answer
function check1 () {
	var input1 = $("#input1_"+window.random).val().toLowerCase();
	var answer1 = $("#answer1_"+window.random).html();

	window.questionN++;

	if (input1 == answer1)
	{
		window.score++;
		window.upTo2++;
		$ (".rightEx").css("display","block");
		window.setTimeout(function(){
			$ ("*").css("color","#000000");
			$ (".btn").css("color","#FFF");
			$ (".rightEx").css("color","#69BB9C");
			$ (".wrongEx").css("color","#e74c3c");
			$ (".rightEx").css("display","none");
			$ (".wrongEx").css("display","none");
			$("#question"+window.random).css("display","none");
			$("#input1_"+window.random).val("");
			window.random = Math.floor((Math.random()*window.n)+window.plusN);
			$("#question"+window.random).css("display","block");
			$("#input1_"+window.random).focus();
			$ (".answer").css("display","none");
		},400);
	}
	else {
		$ (".wrongEx").css("display","block");
		$ (".answer").css("display","block");
		window.setTimeout(function(){
			$ ("*").css("color","#000000");
			$ (".btn").css("color","#FFF");
			$ (".rightEx").css("color","#69BB9C");
			$ (".wrongEx").css("color","#e74c3c");
			$ (".rightEx").css("display","none");
			$ (".wrongEx").css("display","none");
			$("#question"+window.random).css("display","none");
			$("#input1_"+window.random).val("");
			window.random = Math.floor((Math.random()*window.n)+window.plusN);
			$("#question"+window.random).css("display","block");
			$("#input1_"+window.random).focus();
			$ (".answer").css("display","none");
		},3500);
	}
}

//check 2 answers
function check2 () {
	window.upTo2 = 0;
	var input1 = $("#input1_"+window.random).val().toLowerCase();
	var input2 = $("#input2_"+window.random).val().toLowerCase();
	var answer1 = $("#answer1_"+window.random).html();
	var answer2 = $("#answer2_"+window.random).html();

	window.upTo2 = 0;
	window.questionN++; window.questionN++;

	if (input1 == answer1 || input1 == answer2)
	{
		window.score++;
		window.upTo2++;
	}
	if (input2 == answer1 || input2 == answer2) {
		window.score++;
		window.upTo2++;
	}

	if (window.upTo2 == 2) {
		$ (".rightEx").css("display","block");
		window.setTimeout(function(){
			$ ("*").css("color","#000000");
			$ (".btn").css("color","#FFF");
			$ (".rightEx").css("color","#69BB9C");
			$ (".wrongEx").css("color","#e74c3c");
			$ (".rightEx").css("display","none");
			$ (".wrongEx").css("display","none");
			$("#question"+window.random).css("display","none");
			$("#input1_"+window.random).val("");
			$("#input2_"+window.random).val("");
			window.random = Math.floor((Math.random()*window.n)+window.plusN);
			$("#question"+window.random).css("display","block");
			$("#input1_"+window.random).focus();
			$ (".answer").css("display","none");
		},400);
		
	}
	else {
		window.upTo2 = 0;
		$ (".wrongEx").css("display","block");
		$ (".answer").css("display","block");
		window.setTimeout(function(){
			$ ("*").css("color","#000000");
			$ (".btn").css("color","#FFF");
			$ (".rightEx").css("color","#69BB9C");
			$ (".wrongEx").css("color","#e74c3c");
			$ (".rightEx").css("display","none");
			$ (".wrongEx").css("display","none");
			$("#question"+window.random).css("display","none");
			$("#input1_"+window.random).val("");
			$("#input2_"+window.random).val("");
			window.random = Math.floor((Math.random()*window.n)+window.plusN);
			$("#question"+window.random).css("display","block");
			$("#input1_"+window.random).focus();
			$ (".answer").css("display","none");
		},2500);
	}
}

//Check 3 answers
function check3 () {
	var input1 = $("#input1_"+window.random).val().toLowerCase();
	var input2 = $("#input2_"+window.random).val().toLowerCase();
	var input3 = $("#input3_"+window.random).val().toLowerCase();
	var answer1 = $("#answer1_"+window.random).html();
	var answer2 = $("#answer2_"+window.random).html();
	var answer3 = $("#answer3_"+window.random).html();

	window.questionN++;window.questionN++;window.questionN++;

	if (input1 == answer1 || input1 == answer2 || input1 == answer3)
	{
		window.score++;
		window.upTo3++;
	}
	if (input2 == answer1 || input2 == answer2 || input2 == answer3) {
		window.score++;
		window.upTo3++;
	}
	if (input3 == answer1 || input3 == answer2 || input3 == answer3) {
		window.score++;
		window.upTo3++;
	}
	if (window.upTo3 == 3) {
		window.upTo3 = 0;
		$ (".rightEx").css("display","block");
		window.setTimeout(function(){
			$ ("*").css("color","#000000");
			$ (".btn").css("color","#FFF");
			$ (".rightEx").css("color","#69BB9C");
			$ (".wrongEx").css("color","#e74c3c");
			$ (".rightEx").css("display","none");
			$ (".wrongEx").css("display","none");
			$("#question"+window.random).css("display","none");
			$("#input1_"+window.random).val("");
			$("#input2_"+window.random).val("");
			$("#input3_"+window.random).val("");
			window.random = Math.floor((Math.random()*window.n)+window.plusN);
			$("#question"+window.random).css("display","block");
			$("#input1_"+window.random).focus();
			$ (".answer").css("display","none");
		},400);
	}
	else {
		window.upTo3 = 0;
		$ (".wrongEx").css("display","block");
		$ (".answer").css("display","block");
		window.setTimeout(function(){
			$ ("*").css("color","#000000");
			$ (".btn").css("color","#FFF");
			$ (".rightEx").css("color","#69BB9C");
			$ (".wrongEx").css("color","#e74c3c");
			$ (".rightEx").css("display","none");
			$ (".wrongEx").css("display","none");
			$("#question"+window.random).css("display","none");
			$("#input1_"+window.random).val("");
			$("#input2_"+window.random).val("");
			$("#input3_"+window.random).val("");
			window.random = Math.floor((Math.random()*window.n)+window.plusN);
			$("#question"+window.random).css("display","block");
			$("#input1_"+window.random).focus();
			$ (".answer").css("display","none");
		},3500);
	}
}