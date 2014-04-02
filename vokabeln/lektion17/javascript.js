//How many questions are there? or Number of questions in that unit (ony changed by funtion go NOT manually)
window.n = 1;
//Lowest questionnumber of given unit
window.plusN = 1;
//Number of Questions already answerd
window.questionN = 0;

window.upTo3 = 0;
window.random = 0;
window.score = 0;

$(".answer").css("display","none");
 
function go () {
	document.getElementById("question"+0).style.display="none";
	window.random = Math.floor((Math.random()*n)+plusN);
	$ ("#question"+window.random).css("display","block")
}

//Check 3 answers
function check3 () {
	console.log("lol");
	var input1 = document.getElementById("input1_"+window.random).value.toLowerCase();
	var input2 = document.getElementById("input2_"+window.random).value.toLowerCase();
	var input3 = document.getElementById("input3_"+window.random).value.toLowerCase();
	var answer1 = document.getElementById("answer1_"+window.random).value.toLowerCase();
	var answer2 = document.getElementById("answer2_"+window.random).value.toLowerCase();
	var answer3 = document.getElementById("answer3_"+window.random).value.toLowerCase();

	if (input1 == answer1 || input1 == answer2 || input1 == answer3)
	{
		window.score++;
		window.upTo3++;
		window.questionN++;
	}
	if (input2 == answer1 || input2 == answer2 || input2 == answer3) {
		window.score++;
		window.upTo3++;
		window.questionN++;
	}
	if (input3 == answer1 || input3 == answer2 || input3 == answer3) {
		window.score++;
		window.upTo3++;
		window.questionN++;
	}
	if (window.upTo3 == 3) {
		$ (".rightEx").css("display","block");
		window.setTimeout(function(){
			$ ("*").css("color","#000000");
			$ (".btn").css("color","#FFF");
			$ (".rightEx").css("color","#69BB9C");
			$ (".wrongEx").css("color","#e74c3c");
			$ (".rightEx").css("display","none");
			$ (".wrongEx").css("display","none");
   			document.getElementById('question'+random).style.display = "none";
   			document.getElementById("input1_"+random).value = '';
	   		document.getElementById("input2_"+random).value = '';
   			document.getElementById("input3_"+random).value = '';
			window.random = Math.floor((Math.random()*n)+plusN);
			console.log(random);
			document.getElementById("question"+random).style.display="block";
			document.getElementById("input1_"+random).focus();
			$ (".answer").css("display","none");
		},400)
		
	}
	else {
		console.log("XD");
		$ (".wrongEx").css("display","block");
		$ (".answer").css("display","block");
		window.setTimeout(function(){
			$ ("*").css("color","#000000");
			$ (".btn").css("color","#FFF");
			$ (".rightEx").css("color","#69BB9C");
			$ (".wrongEx").css("color","#e74c3c");
			$ (".rightEx").css("display","none");
			$ (".wrongEx").css("display","none");
   			document.getElementById('question'+random).style.display = "none";
   			document.getElementById("input1_"+random).value = '';
	   		document.getElementById("input2_"+random).value = '';
   			document.getElementById("input3_"+random).value = '';
			window.random = Math.floor((Math.random()*n)+plusN);
			console.log(random);
			document.getElementById("question"+random).style.display="block";
			document.getElementById("input1_"+random).focus();
			$ (".answer").css("display","none");
		},3500)
	}
}