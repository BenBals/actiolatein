//initilise
$("div.data").children().addClass('dataDiv');

//How many questions are there? or Number of questions in that unit (ony changed by funtion go NOT manually)
window.n = 1;

window.score = 0;
window.plusN = 1;

//Number of Questions already answerd
window.questionN = 0;

function homeGen () {
	console.log("homeGen up and running");
	window.location.href = "../";
}

function newQ () {
	window.random = Math.floor((Math.random()*window.n)+window.plusN);
	window.question = $(".data div:nth-child("+window.random+") p:nth-child(1)").html();
	window.answer = $(".data div:nth-child("+window.random+") p:nth-child(2)").html();
	$("#quesionHere").html(window.question);
	$("#answerHere").html(window.answer);
	console.log(window.answer);
	window.answer = window.answer.toLowerCase();
	$(".right").css('display', 'none');
	$(".false").css('display', 'none');
	$("#answerHere").css('display', 'none');
	$("#input").val("");
	$("#input").focus();
	console.log(window.question);
	console.log(window.answer);
}

function go () {
	$(".question0").css("display","none");
	$(".questionScreen").css("display","block");
	$(".back").css("display","inline");
	newQ();
}

function check () {
	window.questionN++;
	window.input = $("#input").val().toLowerCase();
	if (window.input == window.answer) {
		window.score++;
		$(".right").css('display', 'block');
		setTimeout (function(){
				newQ();
				}
			,450);
	}
	else {
	$("#answerHere").css('display', 'block');
	$(".false").css('display', 'block');
		setTimeout (function(){
				newQ();
				}
			,1500);
	}
}

function back () {
	$(".questionScreen").css('display', 'none');
	$(".question0").css('display', 'block');
	$(".back").css("display","none");
	window.score = 0;
	window.questionN = 0;
}

function points () {
	alert("Du hast "+window.score+" Fragen von "+window.questionN+" richtig beantwortet!");
}