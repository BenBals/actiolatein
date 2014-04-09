window.score = 0;
window.upTo6 = 0;

function aKonj () {
	window.konj = "a";
	$("#question0").css("display","none");
	$("#aKonj").css("display","block");
}


//1 A
function checkIt () {
	var input1s = $("#input1s_"+window.konj).val().toLowerCase();
	var input2s = $("#input2s_"+window.konj).val().toLowerCase();
	var input3s = $("#input3s_"+window.konj).val().toLowerCase();
	var input1p = $("#input1p_"+window.konj).val().toLowerCase();
	var input2p = $("#input2p_"+window.konj).val().toLowerCase();
	var input3p = $("#input3p_"+window.konj).val().toLowerCase();
	var answer1s = $("answer1s_"+window.konj).text().toLowerCase();
	var answer2s = $("answer2s_"+window.konj).text().toLowerCase();
	var answer3s = $("answer3s_"+window.konj).text().toLowerCase();
	var answer1p = $("answer1p_"+window.konj).text().toLowerCase();
	var answer2p = $("answer2p_"+window.konj).text().toLowerCase();
	var answer3p = $("answer3p_"+window.konj).text().toLowerCase();

	if (input1s == answer1s) {
		window.score++;
		window.upTo6++;
	}
	if (input2s == answer2s) {
		window.score++;
		window.upTo6++;
	}
	if (input3s == answer3s) {
		window.score++;
		window.upTo6++;
	}
	if (input1p == answer1p) {
		window.score++;
		window.upTo6++;
	}
	if (input2p == answer2p) {
		window.score++;
		window.upTo6++;
	}
	if (input3p == answer3p) {
		window.score++;
		window.upTo6++;
	}

	if (window.upTo6 === 6) {
		
	}

}