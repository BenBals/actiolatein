window.score = 0;
window.upTo6 = 0;

function aKonjPraAk () {
	window.konj = "a";
	window.akPa = "ak";
	window.zeit = "pra";
	$(".aw").css("display","inline");
	$("#question0").css("display","none");
	$("#aKonj_pra_ak").css("display","block");
}
function eKonjPraAk () {
	window.konj = "e";
	window.akPa = "ak";
	window.zeit = "pra";
	$(".aw").css("display","inline");
	$("#question0").css("display","none");
	$("#eKonj_pra_ak").css("display","block");
}
function iKonjPraAk () {
	window.konj = "i";
	window.akPa = "ak";
	window.zeit = "pra";
	$(".aw").css("display","inline");
	$("#question0").css("display","none");
	$("#iKonj_pra_ak").css("display","block");
}
function gemKonjPraAk () {
	window.konj = "gem";
	window.akPa = "ak";
	window.zeit = "pra";
	$(".aw").css("display","inline");
	$("#question0").css("display","none");
	$("#gemKonj_pra_ak").css("display","block");
}
function konsKonjPraAk () {
	window.konj = "kons";
	window.akPa = "ak";
	window.zeit = "pra";
	$(".aw").css("display","inline");
	$("#question0").css("display","none");
	$("#konsKonj_pra_ak").css("display","block");
}

function aKonjPraPa () {
	window.konj = "a";
	window.akPa = "pa";
	window.zeit = "pra";
	$(".aw").css("display","inline");
	$("#question0").css("display","none");
	$("#aKonj_pra_pa").css("display","block");
}
function eKonjPraPa () {
	window.konj = "e";
	window.akPa = "pa";
	window.zeit = "pra";
	$(".aw").css("display","inline");
	$("#question0").css("display","none");
	$("#eKonj_pra_pa").css("display","block");
}
function iKonjPraPa () {
	window.konj = "i";
	window.akPa = "pa";
	window.zeit = "pra";
	$(".aw").css("display","inline");
	$("#question0").css("display","none");
	$("#iKonj_pra_pa").css("display","block");
}
function gemKonjPraPa () {
	window.konj = "gem";
	window.akPa = "pa";
	window.zeit = "pra";
	$(".aw").css("display","inline");
	$("#question0").css("display","none");
	$("#gemKonj_pra_pa").css("display","block");
}
function konsKonjPraPa () {
	window.konj = "kons";
	window.akPa = "pa";
	window.zeit = "pra";
	$(".aw").css("display","inline");
	$("#question0").css("display","none");
	$("#konsKonj_pra_pa").css("display","block");
}


function homeKonj () {
	window.location.href = "../index.html";
}

function auswahl () {
	window.location.reload();
}

function checkIt () {
	var input1s = $("#input1s_"+window.zeit+"_"+window.akPa+"_"+window.konj).val().toLowerCase();
	var input2s = $("#input2s_"+window.zeit+"_"+window.akPa+"_"+window.konj).val().toLowerCase();
	var input3s = $("#input3s_"+window.zeit+"_"+window.akPa+"_"+window.konj).val().toLowerCase();
	var input1p = $("#input1p_"+window.zeit+"_"+window.akPa+"_"+window.konj).val().toLowerCase();
	var input2p = $("#input2p_"+window.zeit+"_"+window.akPa+"_"+window.konj).val().toLowerCase();
	var input3p = $("#input3p_"+window.zeit+"_"+window.akPa+"_"+window.konj).val().toLowerCase();
	var answer1s = $("#answer1s_"+window.zeit+"_"+window.akPa+"_"+window.konj).text().toLowerCase();
	var answer2s = $("#answer2s_"+window.zeit+"_"+window.akPa+"_"+window.konj).text().toLowerCase();
	var answer3s = $("#answer3s_"+window.zeit+"_"+window.akPa+"_"+window.konj).text().toLowerCase();
	var answer1p = $("#answer1p_"+window.zeit+"_"+window.akPa+"_"+window.konj).text().toLowerCase();
	var answer2p = $("#answer2p_"+window.zeit+"_"+window.akPa+"_"+window.konj).text().toLowerCase();
	var answer3p = $("#answer3p_"+window.zeit+"_"+window.akPa+"_"+window.konj).text().toLowerCase();

	if (input1s == answer1s) {
		window.score++;
		window.upTo6++;
		$("#input1s_"+window.zeit+"_"+window.akPa+"_"+window.konj).css("border-color","#69BB9C");
	}
	else {
		$("#input1s_"+window.zeit+"_"+window.akPa+"_"+window.konj).css("border-color","#CB4C39");
		$("#answer1s_"+window.zeit+"_"+window.akPa+"_"+window.konj).css("display","inline");
	}
	
	if (input2s == answer2s) {
		window.score++;
		window.upTo6++;
		$("#input2s_"+window.zeit+"_"+window.akPa+"_"+window.konj).css("border-color","#69BB9C");
	}
	else {
		$("#input2s_"+window.zeit+"_"+window.akPa+"_"+window.konj).css("border-color","#CB4C39");
		$("#answer2s_"+window.zeit+"_"+window.akPa+"_"+window.konj).css("display","inline");
	}
	
	if (input3s == answer3s) {
		window.score++;
		window.upTo6++;
		$ ("#input3s_"+window.zeit+"_"+window.akPa+"_"+window.konj).css("border-color","#69BB9C");
	}
	else {
		$("#input3s_"+window.zeit+"_"+window.akPa+"_"+window.konj).css("border-color","#CB4C39");
		$("#answer3s_"+window.zeit+"_"+window.akPa+"_"+window.konj).css("display","inline");
	}
	
	if (input1p == answer1p) {
		window.score++;
		window.upTo6++;
		$("#input1p_"+window.zeit+"_"+window.akPa+"_"+window.konj).css("border-color","#69BB9C");
	}
	else {
		$("#input1p_"+window.zeit+"_"+window.akPa+"_"+window.konj).css("border-color","#CB4C39");
		$("#answer1p_"+window.zeit+"_"+window.akPa+"_"+window.konj).css("display","inline");
	}
	
	if (input2p == answer2p) {
		window.score++;
		window.upTo6++;
		$("#input2p_"+window.zeit+"_"+window.akPa+"_"+window.konj).css("border-color","#69BB9C");
	}
	else {
		$("#input2p_"+window.zeit+"_"+window.akPa+"_"+window.konj).css("border-color","#CB4C39");
		$("#answer2p_"+window.zeit+"_"+window.akPa+"_"+window.konj).css("display","inline");
	}
	
	if (input3p == answer3p) {
		window.score++;
		window.upTo6++;
		$("#input3p_"+window.zeit+"_"+window.akPa+"_"+window.konj).css("border-color","#69BB9C");
	}
	else {
		$("#input3p_"+window.zeit+"_"+window.akPa+"_"+window.konj).css("border-color","#CB4C39");
		$("#answer3p_"+window.zeit+"_"+window.akPa+"_"+window.konj).css("display","inline");
	}
	
	if (window.upTo6 == 6) {
		$(".allRight").css("display","block");
	}
	if (window.upTo6 === 0) {
		$(".nothingRight").css("display","block");
	}
	else {
		if (window.upTo6 != 6) {
			$(".notAllRight").css("display","block");
		}
	}
	window.location.hash = "#"+window.konj+"Konj_"+window.zeit+"_"+window.akPa;
	window.upTo6 = 0;
}